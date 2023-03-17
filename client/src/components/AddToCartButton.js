import { Button, TextField, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { update } from "../models/ProductModel";
import { useParams } from "react-router-dom";

export default function AddToCartButton({ product }) {
  const params = useParams();
  const productId = params.id;

  function onAdd() {
    const amount = document.getElementById("inCart").value;

    update({
      id: productId,
      cartId: 1,
      inCart: amount,
    }).then(() => console.log("tillagd"));
  }

  return (
    <>
      <Button variant="filled" onMouseDown={onAdd}>
        <AddShoppingCartIcon></AddShoppingCartIcon>
        <Typography> &nbsp; Add to cart</Typography>
      </Button>
      <TextField
        name="inCart"
        label="amount"
        id="inCart"
        type="number"
        required
        InputProps={{ inputProps: { min: 0, max: product.stock } }}
      ></TextField>
    </>
  );
}
