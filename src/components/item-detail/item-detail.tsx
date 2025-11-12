import Button from '../button/button';
import './item-detail.scss'

function ItemDetail({ singleProduct }: any) {

    const descriptors = ['collection', 'product type', 'style', 'metal type', 'center stone shape', 'halo', 'center stone carat weight', 'gemstone'];

    return (
        <div className='pinkpanther-product-detail'>
            <div className='pinkpanther-product-pictures'>
                {singleProduct.images.map((image: string, index: number) => (
                    <img className='pinkpanther-product-image' src={image} alt={singleProduct.name} key={index}></img>
                ))}
            </div>
            <div className='pinkpanther-product-detail-content'>
                <div>
                    <h3 className='item-name'>{singleProduct.name}</h3>
                    <p className='-microcopy -bold'>{singleProduct.price}€</p>
                    <p className='-microcopy'><b>Metal type:</b> {singleProduct.metal}</p>
                    <p className='-microcopy'><b>Center stone shape:</b> {singleProduct.shape}</p>
                </div>
                {/* <div className='pinkpanther-product-detail-content'>
                    <div className='pinkpanther-product-detail-content'>
                        <ul>
                            {Object.entries(singleProduct).map(([key, value]) => (
                                
                            <li key={key}>
                                <p>{key}: {value as any}</p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ItemDetail;
