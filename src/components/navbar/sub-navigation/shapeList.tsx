import { Link } from "react-router-dom";
import { shape } from "../../../interfaces/cuts.interface";
import { engagementRing } from "../../../interfaces/engagementRing.interface";
import shapeOval from '../../../assets/shape-oval.webp';
import shapePrincess from '../../../assets/shape-princess-cut.webp';
import shapeEmerald from '../../../assets/shape-emerald-cut.webp';
import shapePear from '../../../assets/shape-pear.webp';
import shapeCushion from '../../../assets/shape-cushion.webp';
import shapeRound from '../../../assets/shape-round.webp';
import shapeMarquise from '../../../assets/shape-marquise.webp';
import '../navbar.scss';


function ShapeList({ rings }: any) {

    var result: [] = [];

    const filterByShape = (shape: string) => {
        result = rings.filter((ring: engagementRing) => {
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
        <li className='sub-navigation-item'>
            <span className='sub-navigation-filter'>Shape</span>
            <ul className='sub-navigation-item-2'>
                {shapeList.map(shape => (
                    <li className='sub-navigation-list-2' key={shape.id}>
                        <Link to="shop/engagement" state={filterByShape(shape.name)}>
                            <img className='sub-navigation-cuts' src={shape.src} alt={shape.alt}></img>
                            {shape.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default ShapeList;
