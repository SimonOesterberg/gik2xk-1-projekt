import { Button, Grid, Rating, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { create } from "../models/RatingModel";
import { getOne } from "../models/UserModel";

export default function NewRatingForm() {
  const params = useParams();
  const productId = params.id;

  let defaultUser = {
    userName: "Default User",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  };

  const [loggedInUser, setLoggedInUser] = useState({ defaultUser });

  useEffect(() => {
    if (localStorage.loggedInUser) {
      getOne(localStorage.loggedInUser).then((user) => {
        setLoggedInUser(user);
      });
    } else {
      setLoggedInUser(defaultUser);
    }
  }, []);

  const emptyRating = {
    id: 0,
    score: 0,
    description: "",
    userId: 0,
    productId: productId,
  };

  if (localStorage.loggedInUser) {
    emptyRating.userId = localStorage.loggedInUser;
  }

  const [rating, setRating] = useState(emptyRating);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    let newRating = { ...rating, [name]: value };

    if (name === "score") {
      newRating = { ...rating, [name]: value * 2 };
    }

    setRating(newRating);
  }

  function onSave() {
    create(rating).then(() => console.log("sparad"));
  }

  return (
    <>
      <Box className="Rating__header">
        <Grid className="Rating__image-container" item xs={6}>
          <img
            className="Rating__image"
            src={loggedInUser.imageUrl}
            alt="Profile"
          ></img>
          <Typography variant="string" component="p">
            {loggedInUser.userName}
          </Typography>
        </Grid>
        <Grid item xs={6} className="Rating__stars">
          <Rating onChange={onChange} name="score" precision={0.5} />
        </Grid>
      </Box>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          onChange={onChange}
          name="description"
          label="Write a review"
          variant="outlined"
          multiline
          className="Rating__textfield"
        />
        <Box className="Rating__submit-container">
          <Button variant="contained" onMouseDown={onSave}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
