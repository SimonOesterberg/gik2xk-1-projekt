import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { create, destroy, getOne, update } from "../models/ProductModel";
import { useEffect, useState } from "react";

import "./ProductEdit.css";
import { Link, useParams } from "react-router-dom";

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
    stock: 0,
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

  function onDelete() {
    if (product.id !== 0) {
      console.log("1:" + product.id);
      destroy(product).then(() => console.log("borttagen"));
    }
  }

  const color = product.color;

  return (
    /* productId && params !== "new" ? */ <Grid
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
            value={product.stock}
            name="stock"
            required
            label="Stock"
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
          <Link to={`/products/${product.id}`}>
            <Button
              variant="filled"
              onMouseDown={onSave}
              style={{ color: "black" }}
            >
              Spara
            </Button>
          </Link>
          <Link to={`/products/${product.id}`}>
            <Button
              variant="filled"
              onMouseDown={onDelete}
              style={{ color: "black" }}
            >
              Delete
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs></Grid>
    </Grid> /* : (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
    /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/
   /*: (
    <Typography>The product you're trying to edit doesn't exist</Typography>
  )*/);
}
