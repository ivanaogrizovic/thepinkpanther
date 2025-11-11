import { Link } from "react-router-dom";
import '../navbar.scss';

interface SubNavigationProps {
    filter: string,
    list: string[];
}

function SubNavigation({ filter, list }: SubNavigationProps) {

    return (
        <ul className='pinkpanther-sub-navigation-list'>
            <li className='pinkpanther-sub-navigation-column'>
                <span className='-microcopy'><b>{filter}</b></span>
                <ul className='pinkpanther-sub-navigation-list'>
                    {list.map((filter, index) => (
                        <li className='pinkpanther-sub-navigation-list-item' key={index}>
                            <Link to={`shop/engagement?shape=${filter}`}>
                                {filter}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}

export default SubNavigation;