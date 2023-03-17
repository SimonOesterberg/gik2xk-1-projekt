import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import DeleteFromCartButton from "./DeleteFromCartButton";
import { update } from "../models/ProductModel";

export default function CartListItem({ product }) {
  function onChange() {
    const amount = document.getElementById("inCart").value;
    const priceDisplay = document.getElementById("productPrice");
    const totalDisplay = document.getElementById("totalCost");

    priceDisplay.innerText = `${product.price * amount} kr`;

    update({ id: product.id, inCart: amount }).then(() =>
      console.log("uppdaterad")
    );
  }

  return (
    <>
      <li className="CartList__item" key={product.id}>
        <Box display={"flex"} alignItems={"center"}>
          <Box height={"5vh"} mr={"1rem"} style={{ aspectRatio: "1/1" }}>
            <img src={product.imageUrl} alt="product" height={"100%"} />
          </Box>
          <Box>
            <Typography variant="p" component="p">
              {product.name}
            </Typography>
          </Box>
        </Box>
        <Box className="CartList__item-right">
          <Box style={{ marginRight: "1rem" }}>
            <Typography variant="p" component="p" id="productPrice">
              {product.price * product.inCart} kr
            </Typography>
          </Box>
          <input
            className="CartList__item-amount"
            id="inCart"
            type="number"
            defaultValue={product.inCart}
            style={{ marginRight: "1rem" }}
            InputProps={{ inputProps: { min: 0, max: product.stock } }}
            onChange={onChange}
          ></input>

          <DeleteFromCartButton productId={product.id}></DeleteFromCartButton>
        </Box>
      </li>
    </>
  );
}
