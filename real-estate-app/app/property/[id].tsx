import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPropertyById } from "../services/propertyService";

const PropertyDetails = () =>{
  const { query } = useRouter();
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    if (query.id) {
      getPropertyById(query.id as string).then(setProperty);
    }
  }, [query.id]);

  if (!property) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h1>{property.title}</h1>
      <img src={property.image} alt={property.title} />
      <p><strong>Preço:</strong> R$ {property.price}</p>
      <p><strong>Cidade:</strong> {property.city}</p>
    </div>
  );
}

export default PropertyDetails;