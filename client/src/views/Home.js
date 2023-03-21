import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ManufacturerList from "../components/ManufacturerList";
import ProductListSmall from "../components/ProductListSmall";
import { getOne } from "../models/UserModel";
import "./Home.css";

function Home() {
  let defaultUser = null;

  const [loggedInUser, setLoggedInUser] = useState({ defaultUser });

  useEffect(() => {
    if (localStorage.loggedInUser) {
      getOne(localStorage.loggedInUser).then((user) => {
        setLoggedInUser(user);
        console.log(user);
      });
    } else {
      setLoggedInUser(defaultUser);
    }
  }, []);

  const quotes = [
    "Sätt färg på dina drömmar ",
    "Ge ditt liv lite mer färg ",
    "lorem ipsum ",
    "Färga ditt liv ",
    "Me gusta paella ",
    "Carpe diem ",
    "Ge ditt liv lite mer färg ",
    "lorem ipsum ",
    "Färga ditt liv ",
    "Me gusta paella ",
  ];

  const quoteGen = () => {
    const rnr = Math.floor(Math.random() * 10);
    return quotes[rnr];
  };

  const location = useLocation();
  return (
    <Grid container columnSpacing={2} rowSpacing={2} className="Home">
      <Grid item xs={12}>
        <Box className="Home__img">
          <Typography className="Home__img--quote" variant="h2" component="h1">
            {quoteGen()}
            {loggedInUser !== null && loggedInUser.firstName}
          </Typography>
        </Box>
      </Grid>
      <Grid className="Grid-item" item xs={12} md={4}>
        <Box width={"100%"}>
          <Typography className="Grid-item__header" variant="h5" component="h2">
            Popular
          </Typography>
          <ProductListSmall className="ProductList">
            pathname={location.pathname}
          </ProductListSmall>
        </Box>
      </Grid>
      <Grid className="Grid-item" item xs={12} md={4}>
        <Box width={"100%"}>
          <Typography className="Grid-item__header" variant="h5" component="h2">
            Recommended
          </Typography>
          <ProductListSmall></ProductListSmall>
        </Box>
      </Grid>
      <Grid className="Grid-item" item xs={12} md={4}>
        <Box width={"100%"}>
          <Typography className="Grid-item__header" variant="h5" component="h2">
            Manufacturers
          </Typography>
          <ManufacturerList />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
