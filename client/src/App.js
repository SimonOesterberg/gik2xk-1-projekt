import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Cart";
import ProductDetail from "./views/ProductDetail";
import ProductEdit from "./views/ProductEdit";
import Products from "./views/Products";
import User from "./views/User";
import UserEdit from "./views/UserEdit";
import Wishlist from "./views/Wishlist";
import CreateProduct from "./views/ProductEdit";
import { getAll } from "./models/ProductModel";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App({ pathname }) {
  const [products, setProducts] = useState([]);
  const filteredList = [];

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  let newProducts = JSON.stringify(products.data);

  if (newProducts) {
    newProducts = JSON.parse(newProducts);
    filteredList.push(newProducts);
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="App__toolbar">
            <IconButton
              size="large"
              edge="start"
              color="white"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link to="/products">
                <MenuIcon />
              </Link>
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">Color Shop</Link>
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                id="inputBox"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <IconButton sx={{ color: "white" }} aria-label={`Wishlist`}>
              <Link to="/products/new">
                <AddIcon />
              </Link>
            </IconButton>

            <IconButton sx={{ color: "white" }} aria-label={"Go to profile"}>
              <Link to="/users/new">
                <PersonIcon />
              </Link>
            </IconButton>

            <IconButton sx={{ color: "white" }} aria-label={`Wishlist`}>
              <Link to="/wishlists/1">
                <StarIcon />
              </Link>
            </IconButton>

            <IconButton aria-label="Go to shopping cart">
              <Link to="/carts/1">
                <ShoppingCartIcon />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container columnSpacing={5} rowSpacing={2} mt={"0"}>
        <Grid item xs={2}>
          <Box className="app__navbar">
            <ul className="navbar__ul" style={{ liststyletype: "none" }}>
              <li className="navbar__ul--li">
                <Link to={"/"}> Products</Link>
              </li>
              <li className="navbar__ul--li">
                {" "}
                <Link to={"/"}> Products</Link>
              </li>
              <li className="navbar__ul--li">
                {" "}
                <Link to={"/"}> Products</Link>
              </li>
              <li className="navbar__ul--li">
                {" "}
                <Link to={"/"}> Products</Link>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/users/:id" element={<User></User>}></Route>
            <Route exact path="/carts/:id" element={<Cart></Cart>}></Route>
            <Route
              exact
              path="/products"
              element={<Products></Products>}
            ></Route>
            <Route
              exact
              path="/users/:id"
              element={<UserEdit></UserEdit>}
            ></Route>
            <Route
              exact
              path="/users/:id/edit"
              element={<UserEdit></UserEdit>}
            ></Route>
            <Route
              exact
              path="/users/new"
              element={<UserEdit></UserEdit>}
            ></Route>
            <Route
              exact
              path="/wishlists/:id"
              element={<Wishlist></Wishlist>}
            ></Route>
            <Route
              exact
              path="/products/:id"
              element={<ProductDetail></ProductDetail>}
            ></Route>
            <Route
              exact
              path="/products/new"
              element={<ProductEdit></ProductEdit>}
            ></Route>
            <Route
              exact
              path="/products/:id/edit"
              element={<ProductEdit></ProductEdit>}
            ></Route>
            <Route
              exact
              path="/products/manufacturer/:id"
              element={<Products></Products>}
            ></Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
