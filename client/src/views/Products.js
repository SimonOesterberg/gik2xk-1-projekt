import ProductListLarge from "../components/ProductListLarge";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Products.css";

function Products() {
  return (
    <Grid container columnSpacing={1} rowSpacing={1} className="Home">
      <Grid className="Grid__item" item xs={12} md={12}>
        <Box>
          <ProductListLarge className="ProductList"></ProductListLarge>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Products;
