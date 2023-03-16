import {
  Rating,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "./ProductDetail.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import FactoryIcon from "@mui/icons-material/Factory";
import ProductRating from "../components/ProductRating";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOne } from "../models/ProductModel";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  let averageScore = 0;

  /* if (product && product.ratings.length > 0) {
    let totalScore = 0;
    product.ratings.forEach(function (rating) {
      totalScore += rating;
    });

    averageScore = totalScore / product.ratings.length;
  } */

  const manufacturer = product.manufacturer;
  const stock = product.uniqueProducts;
  const ratings = product.ratings;

  return product && manufacturer ? (
    <Grid
      container
      columnSpacing={5}
      rowSpacing={2}
      className="ProductDetail__grid"
    >
      <Grid item xs={6}>
        <Box className="ProductDetail__image-container ProductDetail__container">
          <img src={product.imageUrl} alt="Product"></img>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="ProductDetail__basic-info-container ProductDetail__container">
          <Typography variant="h3" component="h2">
            {product.name}
          </Typography>
          <Typography variant="caption" component="p">
            <Rating
              name="avg-rating"
              value={(averageScore / 10) * 5}
              precision={0.5}
              readOnly
            />
            ({product.ratings.length})
          </Typography>
          <Typography variant="h5" component="p">
            {product.price} kr
          </Typography>
          <Box className="ProductDetail__basic-info">
            <FactoryIcon></FactoryIcon>
            <Typography variant="h6" component="p">
              &nbsp;Manufacturer:&nbsp;
            </Typography>

            <Link
              to={`/products/manufacturer/${manufacturer.id}`}
              className={"ProductDetail__manufacturer-link"}
            >
              <Typography variant="string" component="p">
                {manufacturer.name}&nbsp;
              </Typography>

              <img
                height={"100%"}
                src={manufacturer.logoUrl}
                alt="Manufacturer logo"
              />
            </Link>
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
              {stock.length}
            </Typography>
          </Box>
          <Box className="ProductDetail__basic-info">
            <IconButton aria-label="Edit product">
              <Link to={`/products/${product.id}/edit`}>
                <SettingsIcon></SettingsIcon>
              </Link>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="Bottom-container ProductDetail__container">
          <Typography variant="h4" component="h3">
            Description
          </Typography>
          <Typography variant="string" paragraph={true} component="p">
            {product.description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="Bottom-container">
          <Box className="ProductDetail__container">
            <Typography variant="h4" component="h3">
              Add a rating
            </Typography>
            <Box className="Rating__header">
              <Grid className="Rating__image-container" item xs={6}>
                <img
                  className="Rating__image"
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="Profile"
                ></img>
                <Typography variant="string" component="p">
                  Användarnamn
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
          <Box className="ProductDetail__container" mt={"1rem"}>
            <Typography
              className="UserRatings__header"
              variant="h4"
              component="h3"
            >
              User Ratings
            </Typography>
            <ul className="UserRatings__List">
              {ratings.map((rating) => {
                return <ProductRating rating={rating} />;
              })}
            </ul>
          </Box>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <Typography>Ingen produkt</Typography>
  );
}
