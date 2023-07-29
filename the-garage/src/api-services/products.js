const BASEAPI_URL = import.meta.env.VITE_API_URL;

export async function getAllProducts() {
  const response = await fetch(`${BASEAPI_URL}/api/productos`);
  return response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${BASEAPI_URL}/api/productos/${id}`);
  return response.json();
}
// export async function getAllProductFilteres(param) {
//   const response = await fetch(
//     `${BASEAPI_URL}/api/productos?category=${param}`
//   );
//   return response.json();
// }

export async function getAllProductFilters(filters) {
  const response = await fetch(
    `${BASEAPI_URL}/api/productos?category=${param}`
  );
  return response.json();
}
