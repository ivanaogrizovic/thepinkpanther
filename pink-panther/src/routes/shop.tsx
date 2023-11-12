import React from 'react';
import { useEffect, useState } from 'react';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';
import { engagementRing } from '../interfaces/engagementRing.interface';
import shapeFilters from '../shape-filters.json';
import styleFilters from '../style-filters.json';
import metalFilters from '../metal-filters.json';

function Shop({ productList }: any) {
    const [selectedShapes, setSelectedShapes] = useState<Array<string>>([]);
    const [selectedStyles, setSelectedStyles] = useState<Array<string>>([]);
    const [selectedMetals, setSelectedMetals] = useState<Array<string>>([]);
    const [fileredProductList, setFilteredProductList] = useState<Array<engagementRing>>([]);

    const getShapes = (category: string) => {
        if (!selectedShapes.includes(category)) {
            setSelectedShapes(prev => ([...prev, category]))
        }
        if (selectedShapes.includes(category)) {
            console.log(selectedShapes)
            const removedList = selectedShapes.filter((item) => (item !== category));
            setSelectedShapes(removedList);
        }
    }
    const getStyles = (category: string) => {
        if (!selectedStyles.includes(category)) {
            setSelectedStyles(prev => ([...prev, category]))
        }
        if (selectedStyles.includes(category)) {
            console.log(selectedStyles)
            const removedList = selectedStyles.filter((item) => (item !== category));
            setSelectedStyles(removedList);
        }
    }

    const getMetals = (category: string) => {
        if (!selectedMetals.includes(category)) {
            setSelectedMetals(prev => ([...prev, category]))
        }
        if (selectedMetals.includes(category)) {
            console.log(selectedMetals)
            const removedList = selectedMetals.filter((item) => (item !== category));
            setSelectedMetals(removedList);
        }
    }

    const removeDuplicates = (data: Array<engagementRing>) => {
        return [...new Set(data)];

    }

    useEffect(() => {

        if (selectedShapes.length === 0 && selectedStyles.length === 0 && selectedMetals.length === 0) {
            setFilteredProductList(productList);
            // CHECK SHAPES
        } else {
            var filteredShapes: engagementRing[] = [];
            var filteredStyles: engagementRing[] = [];
            var filteredMetals: engagementRing[] = [];

            filteredShapes = (productList.filter((item: engagementRing) => (selectedShapes.includes(item.shape))));
            filteredStyles = (productList.filter((item: engagementRing) => (selectedStyles.includes(item.style))));
            filteredMetals = (productList.filter((item: engagementRing) => (selectedMetals.includes(item.metal))));

            var filteredList = filteredShapes.concat(filteredStyles.concat(filteredMetals));
            removeDuplicates(filteredList);
            console.log(filteredList);

            setFilteredProductList(filteredList);
        }
    }, [selectedShapes, selectedStyles, selectedMetals, productList])

    return (
        <div className='shop-wrapper'>
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