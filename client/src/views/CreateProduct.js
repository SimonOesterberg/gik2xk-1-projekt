import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getAll } from "../models/ProductModel";
import { useEffect, useState } from "react";

import "./CreateProduct.css";

export default function CreateProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then((products) => setProducts(products));
  }, []);

  let newProducts = JSON.stringify(products.data);

  if (newProducts) {
    newProducts = JSON.parse(newProducts);
  }

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={2}
      className="CreateProduct__grid"
    >
      <Grid item xs></Grid>
      <Grid item xs="8" className="Form__container" style={{ padding: "0" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: "1%" },
          }}
          noValidate
          autoComplete="off"
          style={{ padding: "5%" }}
        >
          <Typography variant="h3" component="h1" textAlign={"center"}>
            Create Product
          </Typography>

          <TextField
            className="Form__tf"
            required
            label="Name"
            style={{ width: "20%" }}
          />

          <TextField
            className="Form__tf"
            required
            label="Category"
            style={{ width: "20%" }}
          />

          <TextField
            className="Form__tf"
            required
            label="Image URL"
            style={{ width: "54%" }}
          />
          <TextField
            className="Form__tf"
            required
            label="Price"
            style={{ width: "20%" }}
          />

          <TextField
            className="Form__tf"
            required
            label="Stock"
            style={{ width: "20%" }}
          />
          <TextField
            className="Form__tf"
            required
            label="Color ID"
            style={{ width: "20%" }}
          />
          <TextField
            className="Form__tf"
            required
            label="Description"
            multiline
            rows={4}
            style={{ width: "98%" }}
          />
        </Box>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}
