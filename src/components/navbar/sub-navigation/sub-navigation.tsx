import { Link } from "react-router-dom";
import "../navbar.scss";

interface SubNavigationProps {
  filter: string;
  list: string[];
  onClose?: () => void;
}

export default function SubNavigation({
  filter,
  list,
  onClose,
}: SubNavigationProps) {
  return (
    <ul className="pinkpanther-sub-navigation-list">
      <li className="-microcopy -bold pinkpanther-sub-navigation-title">
        {filter}
      </li>
      {list.map((filterName, index) => (
        <li className="pinkpanther-sub-navigation-list-item" key={index}>
          <Link
            to={`shop/engagement?${filter}=${filterName}`}
            onClick={onClose}
          >
            {filterName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
