import api from "../api.js";

export async function getAll(url = "./products") {
  const result = await api.get(url);

  if (result.status === 200) {
    return result;
  } else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
