import api from "./api";

export async function getAll() {
  const result = await api.get("/manufacturers");

  if (result.status === 200) {
    return result;
  } else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
