import api from "../api.js";

export async function getAll() {
  const result = await api.get("/carts");

  if (result.status === 200) {
    return result;
  } else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
