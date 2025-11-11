import { Link } from "react-router-dom";
import { engagementRing } from '../../interfaces/engagementRing.interface';
import './items-grid.scss';

function ItemsGrid({ rings }: any) {

  let frontImage = 0;
  let result: [] = [];

  const filterSelectedItem = (name: string) => {
    result = rings.filter((ring: any) => {
      return ring.name === name;
    });
    return result;
  };

  return (
    <div className='pinkpanther-product-list fade-in'>
      {rings?.map((ring: engagementRing, index: number) => (
        <Link to="item-detail" state={filterSelectedItem(ring.name)} key={index}>
          <div className='pinkpanther-product'>
            <img className='pinkpanther-product-image' src={ring?.images[frontImage]} alt={ring.name}></img>
            <div className='pinkpanther-product-text'>
              <p>{ring.name}</p>
              <p className='-microcopy -bold'>{ring.price}€</p>
            </div>
          </div>
        </Link>
      ))}
      {rings.length === 0 &&
        <div className='-fade-in'>
          <h3>
            Sorry, we don't have what you're looking for
          </h3>
        </div>
      }
    </div>
  );
}

export default ItemsGrid;
