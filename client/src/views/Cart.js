import {
  Box,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartListItem from "../components/CartListItem";
import { getOne } from "../models/CartModel";
import "./Cart.css";
import PaymentMethods from "../components/PaymentMethods";
import DeliveryMethods from "../DeliveryMethods";

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
      totalCost += product.price * product.inCart;
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

            <Grid
              container
              columnSpacing={1}
              rowSpacing={1}
              className="Grid__Product"
            >
              <Grid className="Grid__item" item xs={12} md={12}>
                <Box>
                  <DeliveryMethods />
                </Box>
              </Grid>
              <Grid className="Grid__item" item xs={12} md={12}>
                <Box>
                  <TextField label="email" name="email" />
                </Box>
              </Grid>

              <Grid className="Grid__item" item xs={12} md={12}>
                <Box>
                  <Checkbox></Checkbox>
                  <Typography variant="p" component="">
                    Email me news and offers
                  </Typography>
                </Box>
              </Grid>

              <Grid className="Grid__item" item xs={6} md={6}>
                <Box>
                  <TextField label="Address" name="address" />
                </Box>
              </Grid>

              <Grid className="Grid__item" item xs={6} md={6}>
                <Box>
                  <TextField label="City" name="City" />
                </Box>
              </Grid>
              <Grid className="Grid__item" item xs={10} md={10}>
                <Box>
                  <TextField label="Country" name="Country" />
                </Box>
              </Grid>

              <Grid className="Grid__item" item xs={10} md={10}>
                <Box>
                  <IconButton name="">Save</IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={"Cart__main-container"}>
            <Typography variant="h3" component="h1">
              Payment
            </Typography>
            <div className="Payment__container">
              <PaymentMethods></PaymentMethods>
            </div>
            <IconButton name="Checkout__btn">Checkout</IconButton>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Typography>No cart with that ID exists</Typography>
  );
}
