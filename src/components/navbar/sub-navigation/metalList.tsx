import { Link } from "react-router-dom";
import { style } from "../../../interfaces/styles.interface";
import '../navbar.scss'

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
        <li className='sub-navigation-item'>
            <span className='sub-navigation-filter'>Metal</span>
            <ul className='sub-navigation-item-2'>
                {metalList.map(metal => (
                    <li className='sub-navigation-list-2' key={metal.id}>
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
