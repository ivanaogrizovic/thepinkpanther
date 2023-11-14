import React from "react";
import { Link } from "react-router-dom";
import '../navbar.css'
import { style } from "../../../interfaces/styles.interface";

function MetalList({ rings }: any) {

    var result: [] = [];

    const filterByMetal = (metal: string) => {
        result = rings.filter((ring: any) => {
            return ring.metal === metal;
        });
        return result;
    };

    const metalList: style[] = [
        {
            id: 0,
            name: "white gold",
        },
        {
            id: 1,
            name: "yellow gold",
        },
        {
            id: 2,
            name: "platinum",
        }
    ];
    return (
        <li className='sub-navigation__item'>
            <span className='sub-navigation__filter'>Metal</span>
            <ul className='sub-navigation__item-2'>
                {metalList.map(metal => (
                    <li className='sub-navigation__list-2' key={metal.id}>
                        <Link to="shop/engagement" state={filterByMetal(metal.name)}>
                            <p>{metal.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default MetalList;