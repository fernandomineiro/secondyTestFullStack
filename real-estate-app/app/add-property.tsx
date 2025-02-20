import { useState } from "react";
import { createProperty } from "./services/propertyService";

const AddProperty = () => {
  const [form, setForm] = useState({ title: "", price: "", city: "", image: "" });

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await createProperty(form);
    alert("Imóvel cadastrado!");
  };

  return (
    <div className="container">
      <h1>Adicionar Imóvel</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Preço" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Cidade" onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL da Imagem" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default AddProperty;