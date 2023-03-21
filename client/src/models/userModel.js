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

export async function loginUser(user) {
  console.log(user);

  const result = await api.get(`/users/login/${user.userName}`);

  if (result.status === 200) {
    console.log(result.data);
    if (result.data.password && result.data.password === user.password) {
      console.log("User logged in");
      localStorage.loggedInUser = result.data.id;
    } else {
      console.log("Incorrect password");
    }

    return result.data;
  } else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function update(user) {
  const result = await api.put(`/users/`, user);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function create(user) {
  const result = await api.post(`/users/`, user);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
