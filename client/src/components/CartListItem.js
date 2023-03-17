import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import DeleteFromCartButton from "./DeleteFromCartButton";

export default function CartListItem({ product }) {
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
            <Typography variant="p" component="p">
              {product.price * product.stock}kr
            </Typography>
          </Box>
          <input
            className="CartList__item-amount"
            type={"number"}
            value={product.stock}
            style={{ marginRight: "1rem" }}
          ></input>

          <DeleteFromCartButton productId={product.id}></DeleteFromCartButton>
        </Box>
      </li>
    </>
  );
}
