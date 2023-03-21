import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Cart from "./views/Cart";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import ProductEdit from "./views/ProductEdit";
import Products from "./views/Products";
import User from "./views/User";
import UserEdit from "./views/UserEdit";
import UserLogin from "./views/UserLogin";
import Wishlist from "./views/Wishlist";

import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getOne } from "./models/UserModel";
import Manufacturer from "./views/Manufacturers";

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

function logOut() {
  localStorage.clear();
  window.location.reload();
}

function App({ pathname }) {
  const [products, setProducts] = useState([]);
  const filteredList = [];

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

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="App__toolbar">
            <Dropdown></Dropdown>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link
                to="/"
                className="Links"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  style={{ height: "5vh", padding: "1rem" }}
                  src="https://imgur.com/7jtB5bl.jpg"
                ></img>
              </Link>
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

            {loggedInUser !== null && loggedInUser.userName === "Admin" && (
              <IconButton sx={{ color: "white" }} aria-label={`Wishlist`}>
                <Link to="/products/new" className="Links">
                  <AddIcon />
                </Link>
              </IconButton>
            )}

            {(loggedInUser === null && (
              <IconButton sx={{ color: "white" }} aria-label={"Go to profile"}>
                <Link to={`/users/new`} className="Links">
                  <PersonIcon />
                </Link>
              </IconButton>
            )) || (
              <Link
                to={`/users/${loggedInUser.id}`}
                className="Links"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#0e335c",
                  borderRadius: "5px",
                  padding: ".5rem 1rem",
                }}
              >
                <Avatar
                  alt="Profile"
                  src={loggedInUser.imageUrl}
                  style={{ marginRight: ".5rem" }}
                />
                <Typography variant="h6">{loggedInUser.userName}</Typography>
              </Link>
            )}

            {(loggedInUser === null && (
              <IconButton aria-label="Log in">
                <Link to="/user/login" className="Links">
                  Logga in
                </Link>
              </IconButton>
            )) || (
              <IconButton
                aria-label="Log in"
                className="Links"
                onClick={logOut}
              >
                Logga ut
              </IconButton>
            )}

            <IconButton sx={{ color: "white" }} aria-label={`Wishlist`}>
              <Link to="/wishlists/1" className="Links">
                <StarIcon />
              </Link>
            </IconButton>

            <IconButton aria-label="Go to shopping cart">
              <Link to="/carts/1" className="Links">
                <ShoppingCartIcon />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid item xs={9}>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/users/:id" element={<User></User>}></Route>
          <Route exact path="/carts/:id" element={<Cart></Cart>}></Route>
          <Route exact path="/products" element={<Products></Products>}></Route>
          <Route exact path="/" element={<UserLogin></UserLogin>}></Route>
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
          <Route
            exact
            path="/manufacturers"
            element={<Manufacturer></Manufacturer>}
          ></Route>

          <Route
            exact
            path="/user/login"
            element={<UserLogin></UserLogin>}
          ></Route>
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
