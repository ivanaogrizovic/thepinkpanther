import { Link } from "react-router-dom";
import '../navbar.scss';

interface SubNavigationProps {
    filter: string,
    list: string[];
}

function SubNavigation({ filter, list }: SubNavigationProps) {

    return (
        <ul className='pinkpanther-sub-navigation-list'>
            <span className='-microcopy -bold'>{filter}</span>
            {list.map((filter, index) => (
                <li className='pinkpanther-sub-navigation-list-item' key={index}>
                    <Link to={`shop/engagement?shape=${filter}`}>
                        {filter}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default SubNavigation;