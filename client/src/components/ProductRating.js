import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ProductRating({ review }) {
  return (
    <>
      <li>
        <Box className="Rating__container">
          <Box className="Rating__header">
            <Grid className="Rating__image-container" item xs={6}>
              <img
                className="Rating__image"
                src={review.profile_pic}
                alt="Profile"
              ></img>
              <Typography variant="string" component="p">
                {review.reviewUser}
              </Typography>
            </Grid>
            <Grid item xs={6} className="Rating__stars">
              <Rating
                name="reviewRating"
                value={(review.reviewRating / 10) * 5}
                precision={0.5}
                readOnly
              />
            </Grid>
          </Box>

          <Typography variant="string" paragraph={true} component="p">
            {review.reviewText}
          </Typography>
        </Box>
      </li>
    </>
  );
}
