import ProductListSmall from "../components/ProductListSmall";
import { Grid, GridItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Wishlist() {
  return (
    <Box className="Wishlist__box">
      <Box className="Wishlist__box--container">
        <Grid container columnSpacing={2} rowSpacing={2} className="Home">
          <Grid className="Grid__item" item xs={12} md={12}>
            <Box>
              <Typography className="Header" variant="h4" component="h2">
                Favorites
              </Typography>
              <ProductListSmall></ProductListSmall>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
