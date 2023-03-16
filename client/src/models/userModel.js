import api from "../api.js";

export async function getAll() {
  const result = await api.get("/users");

  if (result.status === 200) {
    return result;
  } else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function getOne(id) {
  const result = await api.get(`/users/${id}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
