import PersonIcon from "@mui/icons-material/Person";
import { Box, IconButton, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { create, getOne, update } from "../models/UserModel";
import "./Users.css";

export default function UserEdit() {
  const params = useParams();
  const userId = params.id;
  const emptyUser = {
    id: 0,
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    password: "",
    imageUrl: "",
  };

  const [user, setUser] = useState(emptyUser);

  useEffect(() => {
    if (!isNaN(userId)) {
      getOne(userId).then((user) => {
        setUser(user);
        console.log(user);
      });
    } else {
      setUser(emptyUser);
    }
    // eslint-disable-next-line
  }, [userId]);
  console.log(user);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newUser = { ...user, [name]: value };
    setUser(newUser);
  }

  function onSave() {
    if (user.id === 0) {
      create(user).then(() => console.log("sparad"), window.location.reload());
    } else {
      update(user).then(() => console.log("uppdaterad"));
    }
  }

  return (
    <Box className="Box__User">
      <form className="User__form">
        <Box className="User__Grid--container">
          <Grid container spacing={2} className="Grid__User">
            <Grid item xs={5} md={5}>
              <PersonIcon className="Icon__user" />
            </Grid>

            <Grid item xs={5} md={5}>
              <Box className="Box__User--image">
                <img
                  id="image"
                  height={"100%"}
                  src={user.imageUrl}
                  alt="profile picture"
                  onChange={onChange}
                ></img>
              </Box>
            </Grid>
            <Grid item xs={5} md={5}>
              Username
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.userName}
                name="userName"
                label="Username"
                id="UserN"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              Firstname
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.firstName}
                name="firstName"
                label="Name"
                id="Firstname"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              Lastname
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.lastName}
                name="lastName"
                label="Lastname"
                id="Lastname"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              Email
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.email}
                id="Email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              tel
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.tel}
                name="tel"
                label="Tel"
                id="Tel"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              address
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.address}
                name="address"
                label="Address"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              password
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.password}
                name="password"
                id="password"
                label="Password"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              imgURL
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.imageUrl}
                name="imageUrl"
                id="imageUrl"
                label="imgUrl"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={8} md={8}>
              {""}
            </Grid>
            <Grid item xs={4} md={4}>
              <IconButton aria-label="Edit product" onMouseDown={onSave}>
                <Link
                  to={`/users/${user.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  Save{" "}
                </Link>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
