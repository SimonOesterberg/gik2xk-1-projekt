import { Box, IconButton, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loginUser } from "../models/UserModel";
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
    setUser(emptyUser);

    // eslint-disable-next-line
  }, []);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newUser = { ...user, [name]: value };
    setUser(newUser);
  }

  function onSave() {
    loginUser(user).then(() => {
      console.log(`Inloggad som användare: ${user.userName}`);
      window.location.reload();
    });
  }

  return (
    <Box className="Box__User">
      <form className="User__form">
        <Box className="User__Grid--container">
          <Grid container spacing={2} className="Grid__User">
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
              password
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.password}
                type="password"
                name="password"
                id="password"
                label="Password"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={4} md={4}>
              <IconButton aria-label="Log in" onMouseDown={onSave}>
                {
                  <Link
                    to={`/`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {" "}
                    Enter{" "}
                  </Link>
                }
              </IconButton>
            </Grid>
            <Grid item xs={4} md={4}>
              <IconButton aria-label="Create Account">
                {
                  <Link
                    to={`/users/new`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {" "}
                    Create account{" "}
                  </Link>
                }
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
