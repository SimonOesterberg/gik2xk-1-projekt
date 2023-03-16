import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductListSmall from "../components/ProductListSmall";
import "./Home.css";

const HomePage = {
  quoteOne: "Sätt färg på dina drömmar..",
  quoteTwo: "Ge ditt liv lite mer färg..",
};

function Home() {
  return (
    <Grid container columnSpacing={2} rowSpacing={2} className="Home">
      <Grid item xs={12}>
        <Box className="Home__img">
          <Typography className="Home__img--quote" variant="h2" component="h1">
            {HomePage.quoteOne}
          </Typography>
        </Box>
      </Grid>
      <Grid className="Grid__item" item xs={12} md={4}>
        <Box>
          <Typography className="Header" variant="h4" component="h2">
            Popular
          </Typography>
          <ProductListSmall></ProductListSmall>
        </Box>
      </Grid>
      <Grid className="Grid__item" item xs={12} md={4}>
        <Box>
          <Typography className="Header" variant="h4" component="h2">
            Recommended
          </Typography>
          <ProductListSmall></ProductListSmall>
        </Box>
      </Grid>
      <Grid className="Grid__item" item xs={12} md={4}>
        <Box>
          <Typography className="Header" variant="h4" component="h2">
            Manufacturers
          </Typography>
          <ul></ul>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
