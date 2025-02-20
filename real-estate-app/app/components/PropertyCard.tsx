import Link from "next/link";
import "@/styles/propertyCard.css";

export default function PropertyCard({ property }:any) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.city} - R$ {property.price}</p>
      <Link href={`/property/${property.id}`}>Ver Detalhes</Link>
    </div>
  );
}