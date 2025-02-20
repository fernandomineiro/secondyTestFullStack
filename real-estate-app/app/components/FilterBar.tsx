import { useState } from "react";
import "@/styles/filterBar.css";

const  FilterBar = ({ setFilters }:any) => {
    const [filter, setFilter] = useState({ city: "", minPrice: "", maxPrice: "" });

  const handleChange = (e:any) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    setFilters(filter);
  };

  return (
    <div className="filter-bar">
      <input type="text" name="city" placeholder="Cidade" onChange={handleChange} />
      <input type="number" name="minPrice" placeholder="Preço mínimo" onChange={handleChange} />
      <input type="number" name="maxPrice" placeholder="Preço máximo" onChange={handleChange} />
      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
  }
  

  export default FilterBar