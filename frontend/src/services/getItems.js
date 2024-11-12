export const getItems = async (searchQuery) => {
  const response = await fetch(
    `http://localhost:3000/api/items?search=${encodeURIComponent(searchQuery)}`
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};
