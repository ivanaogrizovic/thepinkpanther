import { useState, useEffect, useCallback, memo } from "react";
import { engagementRing } from "../../interfaces/engagementRing.interface";
import Modal from "../modal/modal";
import "./item-detail.scss";

interface ItemDetailProps {
  singleProduct: engagementRing;
}

const IGNORED_KEYS = ["images", "name", "price", "womens"] as const;
type ProductDetailKey = Exclude<
  keyof engagementRing,
  (typeof IGNORED_KEYS)[number]
>;

// Extracted Image Gallery as memoized component
const ProductGallery = memo(
  ({
    images,
    onImageClick,
  }: {
    images: string[];
    onImageClick: (image: string) => void;
  }) => (
    <div
      className="pinkpanther-product-pictures"
      role="region"
      aria-label="Product image gallery"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product image ${index + 1}`}
          className="pinkpanther-product-image"
          onClick={() => onImageClick(image)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") onImageClick(image);
          }}
        />
      ))}
    </div>
  ),
);

export default function ItemDetail({ singleProduct }: ItemDetailProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedImage(null);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const productDetails: [ProductDetailKey, any][] = Object.entries(
    singleProduct,
  ).filter(
    ([key]) => !IGNORED_KEYS.includes(key as (typeof IGNORED_KEYS)[number]),
  ) as [ProductDetailKey, any][];

  return (
    <div className="pinkpanther-product-detail">
      <ProductGallery images={singleProduct.images} onImageClick={openModal} />

      <div
        className="pinkpanther-product-detail-content"
        role="region"
        aria-label="Product details"
      >
        <h1 className="h3">{singleProduct.name}</h1>
        <p className="-microcopy -bold">£{singleProduct.price}</p>

        <ul className="pinkpanther-product-detail-list" role="list">
          {productDetails.map(([key, value]) => (
            <li
              className="pinkpanther-product-detail-list-item"
              key={key}
              role="listitem"
            >
              <p className="-microcopy -bold">{key}:</p>
              <p className="-microcopy">{String(value)}</p>
            </li>
          ))}
        </ul>

        <button className="pinkpanther-button -microcopy">Add to cart</button>
      </div>

      {isModalOpen && selectedImage && (
        <Modal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
}
