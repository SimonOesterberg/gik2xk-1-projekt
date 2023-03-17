import { Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../models/ProductModel";
import { useParams } from "react-router-dom";

export default function AddToCartButton() {
  const params = useParams();
  const productId = params.id;

  const product = {
    id: productId,
  };

  function onAdd() {
    addToCart(product).then(() => console.log("tillagd"));
  }

  return (
    <>
      <Button variant="filled" onMouseDown={onAdd}>
        <AddShoppingCartIcon></AddShoppingCartIcon>
        <Typography> &nbsp; Add to cart</Typography>
      </Button>
    </>
  );
}
