import React from "react";
import { Link } from "react-router-dom";
import '../navbar.css'
import { style } from "../../../interfaces/styles.interface";

function StyleList({ rings }: any) {

    var result: [] = [];

    const filterByStyle = (style: string) => {
        result = rings.filter((ring: any) => {
            return ring.style === style;
        });
        return result;
    };

    const styleList: style[] = [
        {
            id: 0,
            name: "halo",
        },
        {
            id: 1,
            name: "solitaire",
        },
        {
            id: 2,
            name: "three stone",
        },
        {
            id: 3,
            name: "double halo",
        },
        {
            id: 4,
            name: "straight",
        }
    ];
    return (
        <li className='sub-navigation__item'>
            <span className='sub-navigation__filter'>Style</span>
            <ul className='sub-navigation__item-2'>
                {styleList.map(style => (
                    <li className='sub-navigation__list-2' key={style.id}>
                        <Link to="shop/engagement" state={filterByStyle(style.name)}>
                            <p>{style.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default StyleList;