import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";

export default function CartListItem(product) {
  console.log(product);
  return (
    <>
      <li className="CartList__item">
        <Box>
          <Typography variant="p" component="p">
            {product.product.name}
          </Typography>
        </Box>
        <Box className="CartList__item-right">
          <input
            className="CartList__item-amount"
            type={"number"}
            value={product.product.amount}
          ></input>
          <DeleteIcon></DeleteIcon>
        </Box>
      </li>
    </>
  );
}
