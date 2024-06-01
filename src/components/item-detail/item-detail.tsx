import Button from '../button/button';
import './item-detail.scss'

function ItemDetail({ singleProduct }: any) {

    return (
        <div className='item-detail shop-wrapper'>
            <div className='item-pictures-container'>
                {singleProduct.images.map((image: string, index: number) => (
                    <img className='item-image' src={image} alt={singleProduct.name} key={index}></img>
                ))}
            </div>
            <div className='item-text-container'>
                <div>
                    <h3 className='item-name'>{singleProduct.name} Engagement Ring</h3>
                    <h3 className='item-price'>{singleProduct.price}€</h3>
                    <p className='item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='item-descriptor'>Metal type:&nbsp;&nbsp;&nbsp;&nbsp;{singleProduct.metal}</p>
                    <p className='item-descriptor'>Center stone shape:&nbsp;&nbsp;&nbsp;&nbsp;{singleProduct.shape}</p>
                </div>
                <div className='buttons'>
                    <Button text="view in store" buttonClass="button button-primary"></Button>
                    <Button text="find the nearest store" buttonClass="button button-secondary"></Button>
                </div>
                <div className='item-details'>
                    <div className='row'><p className='column'>collection</p><p className='column'>classic</p>
                    </div>
                    <div className='row'><p className='column'>product type</p><p className='column'>engagement ring</p>
                    </div>
                    <div className='row'><p className='column'>style</p><p className='column'>{singleProduct.style}</p>
                    </div>
                    <div className='row'><p className='column'>metal type</p><p className='column'>{singleProduct.metal}</p>
                    </div>
                    <div className='row'><p className='column'>center stone shape</p><p className='column'>{singleProduct.shape}</p>
                    </div>
                    <div className='row'><p className='column'>center stone carat weight</p><p className='column carats'>{singleProduct.carats} ct</p>
                    </div>
                    <div className='row'><p className='column'>gemstone</p><p className='column'>{singleProduct.origin} diamond</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
