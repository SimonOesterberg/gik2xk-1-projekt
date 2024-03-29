import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import ProductListLarge from "../components/ProductListLarge";
import RangeSlider from "../components/Slider";
import "./Products.css";

function Products() {
  const location = useLocation();
  console.log(location);

  return (
    <Grid container columnSpacing={1} rowSpacing={1} className="Grid">
      <Grid className="Grid__item" item xs={12} md={12}>
        <Box>
          <RangeSlider />
        </Box>
      </Grid>
      <Grid className="Grid__item" item xs={12} md={12}>
        <Box>
          <ProductListLarge
            pathname={location.pathname}
            className="ProductList"
          ></ProductListLarge>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Products;
