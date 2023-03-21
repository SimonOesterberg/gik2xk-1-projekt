import ImageList from "@mui/material/ImageList";
import * as React from "react";
import { useEffect, useState } from "react";
import { getAll } from "../models/ProductModel";
import ProductListItem from "./ProductListItem";

export default function ProductListSmall({ pathname }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  let newProducts = JSON.stringify(products.data);

  if (newProducts) {
    newProducts = JSON.parse(newProducts);
  }

  return (
    <ImageList
      className="ProductListSmall"
      sx={{
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}
      cols={2}
    >
      {newProducts &&
        newProducts.map((product) => {
          const cols = 1;
          const rows = 1;

          return (
            <ProductListItem
              key={`productId_${product.id}`}
              item={product}
              cols={cols}
              rows={rows}
            />
          );
        })}
    </ImageList>
  );
}
