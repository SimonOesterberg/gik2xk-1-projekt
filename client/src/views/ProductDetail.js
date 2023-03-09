import { Rating, Typography, Box, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./ProductDetail.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import FactoryIcon from "@mui/icons-material/Factory";
import ProductRating from "../components/ProductRating";

const productData = {
  name: "Fin Färg",
  averageRating: 7,
  manufacturer: "Tomas Kvist AB",
  manufacturer_logo:
    "https://www.borgunda.se/wp-content/uploads/2014/08/Falu-R%C3%B6df%C3%A4rg-logga.jpg",
  description: "Väldigt rolig och bra färg för alla miljöer!",
  ratings: 23,
  price: 200,
  profile_pic:
    "https://th.bing.com/th/id/OIP.8bLU1tvPgHVMJ4ZKSrbN2wHaHa?pid=ImgDet&rs=1",
  stock: 386,
  userName: "My Username",
  reviews: [
    {
      profile_pic:
        "https://th.bing.com/th/id/OIP.8bLU1tvPgHVMJ4ZKSrbN2wHaHa?pid=ImgDet&rs=1",
      reviewText: "Riktigt dålig produkt! Kommer aldrig köpa igen!",
      reviewUser: "Päär Dukan",
      reviewRating: 3,
    },
    {
      profile_pic:
        "https://th.bing.com/th/id/OIP.8bLU1tvPgHVMJ4ZKSrbN2wHaHa?pid=ImgDet&rs=1",
      reviewText: "Toppen",
      reviewUser: "Jag Hetersson",
      reviewRating: 9,
    },
  ],
};

export default function ProductDetail() {
  return (
    <Grid
      container
      columnSpacing={5}
      rowSpacing={2}
      className="ProductDetail__grid"
    >
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
          <Typography variant="h5" component="p">
            {productData.price} kr
          </Typography>
          <Box className="ProductDetail__basic-info">
            <FactoryIcon></FactoryIcon>
            <Typography variant="h6" component="p">
              &nbsp;Manufacturer:&nbsp;
            </Typography>
            <Typography variant="string" component="p">
              {productData.manufacturer}&nbsp;
            </Typography>
            <img
              height={"100%"}
              src={productData.manufacturer_logo}
              alt="Manufacturer logo"
            ></img>
          </Box>
          <Box className="ProductDetail__basic-info">
            <LocalShippingIcon></LocalShippingIcon>
            <Typography variant="h6" component="p">
              &nbsp;Delivery:&nbsp;
            </Typography>
            <Typography variant="string" component="p">
              3-5 Work Days
            </Typography>
          </Box>
          <Box className="ProductDetail__basic-info">
            <InventoryIcon></InventoryIcon>
            <Typography variant="h6" component="p">
              &nbsp;In Stock:&nbsp;
            </Typography>
            <Typography variant="string" component="p">
              {productData.stock}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="Bottom-container">
          <Typography variant="h4" component="h3">
            Description
          </Typography>
          <Typography variant="string" paragraph={true} component="p">
            {productData.description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="Bottom-container">
          <Typography variant="h4" component="h3">
            Add a rating
          </Typography>
          <Box className="Rating__container">
            <Box className="Rating__header">
              <Grid className="Rating__image-container" item xs={6}>
                <img
                  className="Rating__image"
                  src={productData.profile_pic}
                  alt="Profile"
                ></img>
                <Typography variant="string" component="p">
                  {productData.userName}
                </Typography>
              </Grid>
              <Grid item xs={6} className="Rating__stars">
                <Rating name="newRating" precision={0.5} />
              </Grid>
            </Box>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="Write a review"
                variant="outlined"
                multiline
                className="Rating__textfield"
              />
            </Box>
            <Box className="Rating__submit-container">
              <Button variant="contained">Submit</Button>
            </Box>
          </Box>
          <Typography
            className="UserRatings__header"
            variant="h4"
            component="h3"
          >
            User Ratings
          </Typography>
          <ul className="UserRatings__List">
            {productData.reviews.map((review) => {
              return <ProductRating review={review} />;
            })}
          </ul>
        </Box>
      </Grid>
    </Grid>
  );
}
