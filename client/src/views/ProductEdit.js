import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { create, getOne, update } from "../models/ProductModel";
import { useEffect, useState } from "react";

import "./ProductEdit.css";
import { useParams } from "react-router-dom";

export default function ProductEdit() {
  const params = useParams();
  const productId = params.id;

  const emptyProduct = {
    id: 0,
    name: "",
    category: "",
    imageUrl: "",
    description: "",
    price: 0,
    manufacturerId: 0,
    colorId: 0,
    color: { hexValue: "#000" },
  };

  const [product, setProduct] = useState(emptyProduct);

  useEffect(() => {
    if (!isNaN(productId)) {
      getOne(productId).then((product) => {
        setProduct(product);
      });
    } else {
      setProduct(emptyProduct);
    }
    // eslint-disable-next-line
  }, [productId]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  }

  function onSave() {
    if (product.id === 0) {
      create(product).then(() => console.log("sparad"));
    } else {
      update(product).then(() => console.log("uppdaterad"));
    }
  }

  const color = product.color;

  console.log(color);

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
            onChange={onChange}
            value={product.name}
            name="name"
            required
            label="Name"
            style={{ width: "20%" }}
          />
          <TextField
            className="Form__tf"
            onChange={onChange}
            value={product.category}
            name="category"
            required
            label="Category"
            style={{ width: "20%" }}
          />
          <TextField
            className="Form__tf"
            onChange={onChange}
            value={product.imageUrl}
            name="imageUrl"
            required
            label="Image URL"
            style={{ width: "54%" }}
          />
          <TextField
            onChange={onChange}
            className="Form__tf"
            value={product.price}
            name="price"
            required
            label="Price"
            style={{ width: "20%" }}
          />
          <TextField
            onChange={onChange}
            className="Form__tf"
            value={product.manufacturerId}
            name="manufacturerId"
            required
            label="Manufacturer ID"
            style={{ width: "20%" }}
          />
          <TextField
            onChange={onChange}
            className="Form__tf"
            value={product.colorId}
            name="colorId"
            id="colorId"
            required
            label="Color ID"
            style={{ width: "20%", backgroundColor: color.rgbValue }}
          />
          <TextField
            onChange={onChange}
            className="Form__tf"
            value={product.description}
            name="description"
            required
            label="Description"
            multiline
            rows={4}
            style={{ width: "98%" }}
          />
          <Button variant="filled" onMouseDown={onSave}>
            Spara
          </Button>
        </Box>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}
