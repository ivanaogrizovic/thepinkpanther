import { Link } from "react-router-dom";
import { useMemo } from "react";
import { engagementRing } from "../../interfaces/engagementRing.interface";
import "./items-grid.scss";

export default function ItemsGrid({ rings }: { rings: engagementRing[] }) {
  const frontImage = 0;

  const ringsByName = useMemo(() => {
    const map: Record<string, engagementRing[]> = {};
    rings.forEach((ring) => {
      map[ring.name] = rings.filter((r) => r.name === ring.name);
    });
    return map;
  }, [rings]);

  return (
    <div className="pinkpanther-product-list -fade-in">
      {rings?.map((ring, index) => (
        <Link to="item-detail" state={ringsByName[ring.name]} key={index}>
          <div className="pinkpanther-product -fade-in">
            <img
              className="pinkpanther-product-image"
              src={ring?.images[frontImage]}
              alt={ring.name}
            />
            <div className="pinkpanther-product-text">
              <p>{ring.name}</p>
              <p className="-microcopy -bold">{ring.price}€</p>
            </div>
          </div>
        </Link>
      ))}

      {rings.length === 0 && (
        <div className="-fade-in">
          <h3>Sorry, we don't have what you're looking for</h3>
        </div>
      )}
    </div>
  );
}
