import React from 'react';
import { useMemo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { engagementRing } from '../interfaces/engagementRing.interface';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';
import engagementHero2 from '.././assets/engagement-set.webp';
import Hero from '../components/hero/hero';

type FilterCategory = 'shape' | 'style' | 'metal';
type FiltersState = Record<FilterCategory, Set<string>>;

function makeEmptyFilters(): FiltersState {
  return { shape: new Set(), style: new Set(), metal: new Set() };
}

function Shop({ productList }: { productList: engagementRing[] }) {
  const location = useLocation();
  const productsFromComponent = location.state as engagementRing[] | undefined;

  const [filters, setFilters] = React.useState<FiltersState>(() => makeEmptyFilters());

  const toggleFilter = useCallback((category: FilterCategory, value: string) => {
    setFilters(prev => {
      const next = {
        shape: new Set(prev.shape),
        style: new Set(prev.style),
        metal: new Set(prev.metal),
      };
      const setForCategory = next[category];
      if (setForCategory.has(value)) setForCategory.delete(value);
      else setForCategory.add(value);
      return next;
    });
  }, []);

  const sortByName = (data: engagementRing[]) =>
    [...data].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  const baseList = productsFromComponent ?? productList ?? [];

  const filteredProductList = useMemo(() => {
    const hasAnyFilter = filters.shape.size > 0 || filters.style.size > 0 || filters.metal.size > 0;

    if (!hasAnyFilter) return sortByName(baseList);

    return sortByName(
      baseList.filter(item => {
        const shapeOk = filters.shape.size === 0 || filters.shape.has(item.shape);
        const styleOk = filters.style.size === 0 || filters.style.has(item.style);
        const metalOk = filters.metal.size === 0 || filters.metal.has(item.metal);
        return shapeOk && styleOk && metalOk;
      })
    );
  }, [baseList, filters]);

useEffect(() => {
  const params = new URLSearchParams(location.search);

  const nextFilters: FiltersState = { shape: new Set(), style: new Set(), metal: new Set() };

  ['shape', 'style', 'metal'].forEach(category => {
    const value = params.get(category);
    if (value) value.split(',').forEach(v => nextFilters[category as FilterCategory].add(v));
  });

  setFilters(nextFilters);
}, [location.search]);

  return (
    <div className='-fade-in'>
      <Hero image ={engagementHero2}/>
      <div className='pinkpanther-shop-content'>
        <Filters
          selectedFilters={filters}
          onToggle={toggleFilter}
        />
        <ItemsGrid rings={filteredProductList} />
      </div>
    </div>
  );
}

export default Shop;