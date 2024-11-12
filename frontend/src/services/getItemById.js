export const getItemById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};
