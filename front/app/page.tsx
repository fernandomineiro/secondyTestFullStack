'use client';

import { useEffect, useState } from "react";
import PropertyCard from "./components/PropertyCard";
import { getProperties } from "./services/propertyService";

 const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then(setProperties);
  }, []);

  return (
    <div className="container">
      <h1>Lista de Imóveis</h1>
      <div className="property-list">
        {properties.map((property:any) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}
export default Home