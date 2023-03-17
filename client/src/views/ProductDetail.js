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
import NewRatingForm from "../components/NewRatingForm";
import AddToCartButton from "../components/AddToCartButton";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  const manufacturer = product.manufacturer;
  const ratings = product.ratings;

  let averageScore = 0;

  if (product && ratings) {
    console.log(ratings);
    let totalScore = 0;
    ratings.forEach((rating) => {
      totalScore += rating.score;
    });

    averageScore = totalScore / ratings.length;
  }

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
              value={averageScore / 2}
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
              {product.stock}
            </Typography>
          </Box>
          <Box className="ProductDetail__basic-info">
            <IconButton aria-label="Edit product">
              <Link to={`/products/${product.id}/edit`}>
                <SettingsIcon></SettingsIcon>
              </Link>
            </IconButton>
          </Box>
          <Box className="ProductDetail__basic-info">
            <AddToCartButton></AddToCartButton>
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
            <NewRatingForm></NewRatingForm>
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
