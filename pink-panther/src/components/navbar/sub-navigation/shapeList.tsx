import React from "react";
import { Link } from "react-router-dom";
import '../navbar.css'
import { shape } from "../../../interfaces/cuts.interface";

import shapeOval from '../../../assets/shape-oval.png';
import shapePrincess from '../../../assets/shape-princess-cut.png';
import shapeEmerald from '../../../assets/shape-emerald-cut.png';
import shapePear from '../../../assets/shape-pear.png';
import shapeCushion from '../../../assets/shape-cushion.png';
import shapeRound from '../../../assets/shape-round.png';
import shapeMarquise from '../../../assets/shape-marquise.png';


function ShapeList(props: any) {

    var result: [] = [];

    const filterByShape = (shape: string) => {
        result = props.rings.filter((ring: any) => {
            return ring.shape === shape;
        });
        return result;
    };

    const shapeList: shape[] = [
        {
            id: 0,
            src: shapeOval,
            alt: "oval cut diamond",
            name: "oval",
        },
        {
            id: 1,
            src: shapePrincess,
            alt: "princess cut diamond",
            name: "princess",
        },
        {
            id: 2,
            src: shapeEmerald,
            alt: "emerald cut diamond",
            name: "emerald",
        },
        {
            id: 3,
            src: shapePear,
            alt: "pear cut diamond",
            name: "pear",
        },
        {
            id: 4,
            src: shapeCushion,
            alt: "cushion cut diamond",
            name: "cushion",
        },
        {
            id: 5,
            src: shapeRound,
            alt: "round cut diamond",
            name: "round",
        },
        {
            id: 6,
            src: shapeMarquise,
            alt: "marquise cut diamond",
            name: "marquise",
        },
    ];
    return (
        <li className='sub-navigation__item'>
            <span className='sub-navigation__filter'>Shape</span>
            <ul className='sub-navigation__item-2'>
                {shapeList.map(shape => (
                    <li className='sub-navigation__list-2' key={shape.id}>
                        <Link to="shop/engagement" state={filterByShape(shape.name)}>
                            <img className='sub-navigation__cuts' src={shape.src} alt={shape.alt}></img>
                            {shape.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default ShapeList;