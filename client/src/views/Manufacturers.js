import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import ManufacturerList from "../components/ManufacturerList";
import "./Products.css";

export default function () {
  return (
    <Grid container columnSpacing={1} rowSpacing={1} className="Grid">
      <Grid className="Grid__item" item xs={6} md={6}>
        <Box>
          <ManufacturerList className="ProductList"></ManufacturerList>
        </Box>
      </Grid>
    </Grid>
  );
}
