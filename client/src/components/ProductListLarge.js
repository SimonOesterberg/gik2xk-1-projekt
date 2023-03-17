import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ProductListItem from "./ProductListItem";
import { getAll } from "../models/ProductModel";
import { useEffect, useState } from "react";
import Products from "../views/Products";

export default function ProductListLarge({ pathname }) {
  console.log(pathname);

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
      className="ProductList"
      sx={{
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={5}
      cols={5}
    >
      {console.log(newProducts)}
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
