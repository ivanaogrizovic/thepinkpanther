import React from 'react';
import ItemsGrid from '../components/items-grid/items-grid';
import Filters from '../components/filters/filters';
import { engagementRing } from '../interfaces/engagementRing.interface';
import shapeFilters from '../shape-filters.json';
import { filter } from '../interfaces/filters.interface';

function Shop({ productList }: any) {
    var newItemList: any = [];

    const updateFilters = (item: any) => {
        shapeFilters.filter((shape) => {
            if (shape.value === item.value) {
                shape.isChecked = item.isChecked;
            }
        })
        updateProducts(item);
    }

    const updateProducts = (item: filter) => {
        const findItems = productList.filter((ring: engagementRing) => ring.shape === item.value)
        console.log(item.value)
        if (item.isChecked) {
            newItemList.push.apply(newItemList, findItems);
        }
        else {
            for (let index = newItemList.length - 1; index >= 0; index--) {
                if (newItemList[index].shape === item.value) {
                    newItemList.splice(index, 1);
                }
            }

        }
        console.log(newItemList)
    }

    return (
        <div className='shop-wrapper'>
            <Filters filterShape={updateFilters}
                shapeFilters={shapeFilters}
            />
            <ItemsGrid rings={productList} />
        </div>
    );
}

export default Shop;