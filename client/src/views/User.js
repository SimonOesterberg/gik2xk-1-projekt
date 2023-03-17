import { Box, textFieldClasses } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Users.css";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { create, getOne, update } from "../models/UserModel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const userId = params.id;

  const [user, setuser] = useState({});

  useEffect(() => {
    getOne(userId).then((user) => {
      setuser(user);
    });
  }, [userId]);

  const username = user.userName;
  const firstname = user.firstName;
  const lastname = user.lastname;
  const tel = user.tel;
  const address = user.address;
  const email = user.email;
  const password = user.password;

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
                id="UserN"
                variant="outlined"
                multiline
                disabled
              />
            </Grid>
            <Grid item xs={5} md={5}>
              firstname
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.firstName}
                name="firstName"
                id="Firstname"
                variant="outlined"
                multiline
                disabled
              />
            </Grid>
            <Grid item xs={5} md={5}>
              Lastname
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.lastName}
                name="lastName"
                id="Lastname"
                variant="outlined"
                multiline
                disabled
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
                variant="outlined"
                multiline
                disabled
              />
            </Grid>
            <Grid item xs={5} md={5}>
              tel
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.tel}
                name="tel"
                id="Tel"
                variant="outlined"
                multiline
                disabled
              />
            </Grid>
            <Grid item xs={5} md={5}>
              address
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                value={user.address}
                name="address"
                variant="outlined"
                disabled
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
                variant="outlined"
                multiline
                disabled
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
                variant="outlined"
                multiline
                disabled
              />
            </Grid>
            <Grid item xs={8} md={8}>
              {""}
            </Grid>
            <Grid item xs={5} md={5}>
              <IconButton aria-label="Create user">
                <Link to={`/users/new`}>New</Link>
              </IconButton>
            </Grid>
            <Grid item xs={4} md={4}>
              <IconButton aria-label="Edit user">
                <Link to={`/users/${user.id}/edit`}>
                  <SettingsIcon></SettingsIcon>
                </Link>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default User;
