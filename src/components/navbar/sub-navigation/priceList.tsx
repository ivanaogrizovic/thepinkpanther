import { Link } from "react-router-dom";
import { style } from "../../../interfaces/styles.interface";
import '../navbar.scss';

function PriceList({ rings }: any) {

    var result: [] = [];

    const filterByShape = (metal: string) => {
        result = rings.filter((ring: any) => {
            return ring.metal === metal;
        });
        return result;
    };

    const priceList: style[] = [
        {
            id: 0,
            name: "less than 600€",
        },
        {
            id: 1,
            name: "600€ - 1000€",
        },
        {
            id: 2,
            name: "1000€ - 2500€",
        },
        {
            id: 3,
            name: "2500€ - more",
        }
    ];
    return (
        <li className='sub-navigation-item'>
            <span className='sub-navigation-filter'>Price</span>
            <ul className='sub-navigation-item-2'>
                {priceList.map(price => (
                    <li className='sub-navigation-list-2' key={price.id}>
                        <Link to="shop/engagement" state={filterByShape(price.name)}>
                            <p>{price.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default PriceList;
