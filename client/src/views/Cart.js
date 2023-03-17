import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartListItem from "../components/CartListItem";
import { getOne } from "../models/CartModel";
import "./Cart.css";

export default function Cart() {
  const params = useParams();
  const cartId = params.id;

  const [cart, setCart] = useState({});

  useEffect(() => {
    getOne(cartId).then((cart) => {
      setCart(cart);
    });
  }, [cartId]);

  const products = cart.products;
  let totalCost = 0;

  if (cart && products) {
    products.forEach((product) => {
      totalCost += product.price * product.stock;
    });
  }

  return cart && products ? (
    <Grid container columnSpacing={2} rowSpacing={2} className="Cart__grid">
      <Grid item xs={6}>
        <Box className={"Cart__main-container"}>
          <Typography variant="h3" component="h1">
            Items in cart
          </Typography>
          <ul className="CartList">
            {products.map((product) => {
              return <CartListItem product={product} />;
            })}
          </ul>
          <Typography variant="h5" component="p" textAlign={"right"}>
            Total cost: {totalCost}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Box className={"Cart__main-container"}>
            <Typography variant="h3" component="h1">
              Delivery
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={"Cart__main-container"}>
            <Typography variant="h3" component="h1">
              Payment
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={"Cart__main-container"}>
            <Typography variant="h1" component="h1">
              Klarna
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Typography>No cart with that ID exists</Typography>
  );
}
