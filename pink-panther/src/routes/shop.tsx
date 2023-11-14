import React from 'react';
import { useEffect, useState } from 'react';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';
import { engagementRing } from '../interfaces/engagementRing.interface';
import shapeFilters from '../shape-filters.json';
import styleFilters from '../style-filters.json';
import metalFilters from '../metal-filters.json';

import { useLocation } from 'react-router-dom';

function Shop({ productList }: any) {

    const location = useLocation();
    const productsFromComponent = location.state;

    const [selectedShapes, setSelectedShapes] = useState<Array<string>>([]);
    const [selectedStyles, setSelectedStyles] = useState<Array<string>>([]);
    const [selectedMetals, setSelectedMetals] = useState<Array<string>>([]);
    const [fileredProductList, setFilteredProductList] = useState<Array<engagementRing>>([]);

    const getShapes = (category: string) => {
        if (!selectedShapes.includes(category)) {
            setSelectedShapes(prev => ([...prev, category]))
        }
        if (selectedShapes.includes(category)) {
            const removedList = selectedShapes.filter((item) => (item !== category));
            setSelectedShapes(removedList);
        }
    }

    const getStyles = (category: string) => {
        if (!selectedStyles.includes(category)) {
            setSelectedStyles(prev => ([...prev, category]))
        }
        if (selectedStyles.includes(category)) {
            const removedList = selectedStyles.filter((item) => (item !== category));
            setSelectedStyles(removedList);
        }
    }

    const getMetals = (category: string) => {
        if (!selectedMetals.includes(category)) {
            setSelectedMetals(prev => ([...prev, category]))
        }
        if (selectedMetals.includes(category)) {
            const removedList = selectedMetals.filter((item) => (item !== category));
            setSelectedMetals(removedList);
        }
    }

    const removeDuplicates = (data: Array<engagementRing>) => {
        return [...new Set(data)];
    }

    const sortOrder = (data: Array<engagementRing>) => {
        data.sort(function (a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }

    const filterBy = (filterObject: string[], filterValue: string) => {
        if (filterObject.length === 0) {
            return true;
        }
        return filterObject.includes(filterValue);
    }

    useEffect(() => {
        if (selectedShapes.length === 0 && selectedStyles.length === 0 && selectedMetals.length === 0) {
            if (!productsFromComponent) {
                sortOrder(productList)
                setFilteredProductList(productList);
            } else {
                sortOrder(productsFromComponent)
                setFilteredProductList(productsFromComponent);
            }
        } else {
            const filteredList: engagementRing[] = productList.filter((item: engagementRing) => filterBy(selectedShapes, item.shape) &&
                filterBy(selectedStyles, item.style) && filterBy(selectedMetals, item.metal));
            sortOrder(filteredList);
            setFilteredProductList(filteredList);
        }
    }, [selectedShapes, selectedStyles, selectedMetals, productList, productsFromComponent]);
    return (
        <div className='shop-wrapper fade-in'>
            <Filters
                getShapes={getShapes}
                getStyles={getStyles}
                getMetals={getMetals}
                shapeFilters={shapeFilters}
                styleFilters={styleFilters}
                metalFilters={metalFilters}
            />
            <ItemsGrid rings={fileredProductList} />
        </div>
    );
}

export default Shop;