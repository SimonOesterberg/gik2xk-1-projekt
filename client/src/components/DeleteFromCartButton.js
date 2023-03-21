import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { update } from "../models/ProductModel";

export default function DeleteFromCartButton({ productId }) {
  const product = {
    id: productId,
    cartId: null,
  };

  function onDelete() {
    update(product)
      .then(() => window.location.reload(true))
      .then(() => console.log("borttagen"));
  }

  return (
    <>
      <Link to="/carts/1">
        <DeleteIcon onClick={onDelete} style={{ color: "black" }}></DeleteIcon>
      </Link>
    </>
  );
}
