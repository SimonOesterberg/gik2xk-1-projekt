import api from "../api.js";

export async function getAll() {
  const result = await api.get("/ratings");

  if (result.status === 200) {
    return result;
  } else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function create(rating) {
  const result = await api.post(`/ratings/`, rating);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
