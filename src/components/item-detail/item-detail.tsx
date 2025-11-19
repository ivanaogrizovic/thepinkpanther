import { useState, useEffect } from 'react';
import { engagementRing } from '../../interfaces/engagementRing.interface';
import Modal from '../modal/modal';
import './item-detail.scss'

function ItemDetail({ singleProduct }: { singleProduct: engagementRing }) {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);

    return (
        <div className='pinkpanther-product-detail'>
            <div className='pinkpanther-product-pictures'>
                {singleProduct.images.map((image: string, index: number) => (
                    <img 
                        className='pinkpanther-product-image' 
                        src={image} 
                        alt="" 
                        key={index} 
                        onClick={() => openModal(image)}>
                    </img>
                ))}
            </div>
            <div className='pinkpanther-product-detail-content'>
                <h3>{singleProduct.name}</h3>
                <p className='-microcopy -bold'>£{singleProduct.price}</p>
                <ul>
                    {Object.entries(singleProduct)
                    .filter(([key, value]) => key !== 'images' && key !== 'name' && key !== 'price' && key !== 'womens')
                    .map(([key, value]) => (
                    <li
                        className='pinkpanther-product-detail-list-item'
                        key={key}
                    >
                        <p className='-microcopy -bold'>{key}:</p>
                        <p className='-microcopy'>{String(value)}</p>
                    </li>
                ))}
                </ul>
            </div>
            {isModalOpen && selectedImage && 
            <Modal 
                closeModal={closeModal}
                selectedImage={selectedImage}
            />}
        </div>
    );
}

export default ItemDetail;
