import { Rating, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./ProductDetail.css";

const productData = {
  name: "Fin Färg",
  averageRating: 7,
  manufacturer: "Tomas Kvist AB",
  description: "Väldigt rolig och bra färg för alla miljöer!",
  ratings: 23,
};

export default function ProductDetail() {
  return (
    <Grid container columnSpacing={2} rowSpacing={2} className="Grid">
      <Grid item xs={6}>
        <Box className="ProductDetail__image-container">
          <img
            src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-paint-can-monogram-other-bags--M81590_PM1_Other%20view.jpg"
            alt="Product"
          ></img>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="ProductDetail__basic-info-container">
          <Typography variant="h3" component="h2">
            {productData.name}
          </Typography>
          <Typography variant="caption" component="p">
            <Rating
              name="avg-rating"
              value={(productData.averageRating / 10) * 5}
              precision={0.5}
              readOnly
            />
            ({productData.ratings})
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="ProductDetail__bottom-container">
          <Typography variant="h4" component="h3">
            Description
          </Typography>
          <Typography variant="string" paragraph={true} component="p">
            {productData.description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="ProductDetail__ratings-container">
          <Typography variant="h4" component="h3">
            Ratings
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
