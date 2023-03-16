import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ProductRating({ rating }) {
  return (
    <>
      <li>
        <Box className="ProductDetail__container">
          <Box className="Rating__header">
            <Grid className="Rating__image-container" item xs={6}>
              <img
                className="Rating__image"
                src={rating.user.imageUrl}
                alt="Profile"
              ></img>
              <Typography variant="string" component="p">
                {rating.user.userName}
              </Typography>
            </Grid>
            <Grid item xs={6} className="Rating__stars">
              <Rating
                name="reviewRating"
                value={(rating.score / 10) * 5}
                precision={0.5}
                readOnly
              />
            </Grid>
          </Box>

          <Typography variant="string" paragraph={true} component="p">
            {rating.description}
          </Typography>
        </Box>
      </li>
    </>
  );
}
