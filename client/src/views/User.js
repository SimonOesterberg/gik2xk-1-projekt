import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Users.css";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";

const UserAccount = {
  Username: "CHOCHOCharles",
  ProfilePicture:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  Name: "Tomas Trainson",
  email: "Tomas@gmail.com",
  Password: "*****",
};

function User() {
  return (
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
                src={UserAccount.ProfilePicture}
                alt="profile picture"
              ></img>
            </Box>
          </Grid>
          <Grid item xs={5} md={5}>
            username
          </Grid>
          <Grid item xs={5} md={5}>
            <TextField
              disabled
              variant="outlined"
              multiline
              label={UserAccount.Username}
            />
          </Grid>
          <Grid item xs={5} md={5}>
            Name
          </Grid>
          <Grid item xs={5} md={5}>
            <TextField
              disabled
              label={UserAccount.Name}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={5} md={5}>
            email
          </Grid>
          <Grid item xs={5} md={5}>
            <TextField
              disabled
              label={UserAccount.email}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={5} md={5}>
            password
          </Grid>
          <Grid item xs={5} md={5}>
            <TextField
              disabled
              label={UserAccount.Password}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={8} md={8}>
            {""}
          </Grid>
          <Grid item xs={4} md={4}>
            <IconButton className="btn">
              <SettingsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default User;
