import User from "./User";
import { Box, textFieldClasses } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Users.css";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function CreateUser() {
  <Box className="Box__User">
    <Box className="User__Grid--container">
      <Grid container spacing={2} className="Grid__User">
        <Grid item xs={5} md={5}>
          <PersonIcon className="Icon__user" />
        </Grid>
        <Grid item xs={5} md={5}>
          <Box className="Box__User--image">
            <img
              className="Box__User__Image"
              height={"100%"}
              src={""}
              alt="profile picture"
            ></img>
          </Box>
        </Grid>
        <Grid item xs={5} md={5}>
          Username
        </Grid>
        <Grid item xs={5} md={5}>
          <TextField
            label="Username"
            className="tf"
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={5} md={5}>
          Name
        </Grid>
        <Grid item xs={5} md={5}>
          <TextField label="Name" className="tf" variant="outlined" multiline />
        </Grid>
        <Grid item xs={5} md={5}>
          Email
        </Grid>
        <Grid item xs={5} md={5}>
          <TextField
            className="tf"
            label="Email"
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={5} md={5}>
          password
        </Grid>
        <Grid item xs={5} md={5}>
          <TextField
            className="tf"
            label="Password"
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={8} md={8}>
          {""}
        </Grid>
        <Grid item xs={4} md={4}>
          <IconButton className="btn" onClick={""}>
            save
            <Link to="/CreateUser">Color Shop</Link>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  </Box>;
}

export default CreateUser;
