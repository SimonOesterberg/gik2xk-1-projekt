import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductListSmall from "../components/ProductListSmall";
import "./Home.css";

function Home() {
  return (
    <Grid container columnSpacing={2} rowSpacing={2} className="Home">
      <Grid item xs={12}>
        <Box className="Home__img">
          <Typography variant="h2" component="h1">
            Carpe Diem sebastian
          </Typography>
        </Box>
      </Grid>
      <Grid className="Grid__item" item xs={12} md={6}>
        <Box>
          <Typography className="Header" variant="h4" component="h2">
            Popular
          </Typography>
          <ProductListSmall className="ProductList"></ProductListSmall>
        </Box>
      </Grid>
      <Grid className="Grid__item" item xs={12} md={6}>
        <Box>
          <Typography className="Header" variant="h4" component="h2">
            Recommended
          </Typography>
          <ProductListSmall className="ProductList"></ProductListSmall>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
