const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"; // Ajuste conforme necessário

export const getProperties = async () => {
  const res = await fetch(`${API_URL}/properties`);
  return res.json();
};

export const getPropertyById = async (id: string) => {
  const res = await fetch(`${API_URL}/properties/${id}`);
  return res.json();
};

export const createProperty = async (propertyData: any) => {
  const res = await fetch(`${API_URL}/properties`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(propertyData),
  });
  return res.json();
};