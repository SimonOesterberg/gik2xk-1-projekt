import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CartListItem from "../components/CartListItem";
import "./Cart.css";

const cartData = {
  content: [
    {
      name: "Äpple",
      price: 200,
      amount: 1,
    },
    {
      name: "Päron",
      price: 100,
      amount: 3,
    },
    {
      name: "Apelsin",
      price: 300,
      amount: 7,
    },
  ],
};

export default function Cart() {
  return (
    <Grid container columnSpacing={2} rowSpacing={2} className="Cart__grid">
      <Grid item xs={6}>
        <Box className={"Cart__main-container"}>
          <Typography variant="h3" component="h1">
            Items in cart
          </Typography>
          <ul className="CartList">
            {cartData.content.map((product) => {
              return <CartListItem product={product} />;
            })}
          </ul>
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
      </Grid>
    </Grid>
  );
}
