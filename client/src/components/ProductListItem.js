import InfoIcon from "@mui/icons-material/Info";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";

function srcset(image, width, height, rows, cols) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function ProductListItem({ item, cols, rows }) {
  return (
    <>
      <ImageListItem cols={cols} rows={rows}>
        <img
          {...srcset(item.imageUrl, 250, 200, rows, cols)}
          alt={item.name}
          loading="lazy"
        />
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          }}
          title={item.name}
          position="top"
          actionIcon={
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{ color: "white" }}
                aria-label={`star ${item.name}`}
                style={{ display: "flex", alignItems: "center" }}
              >
                <StarBorderIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white" }}
                aria-label={`info ${item.name}`}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Link
                  to={`/products/${item.id}`}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InfoIcon />
                </Link>
              </IconButton>
            </Box>
          }
          actionPosition="right"
        />
        <ImageListItemBar
          title={`${item.price}kr`}
          position="bottom"
          style={{ textAlign: "right" }}
        />
      </ImageListItem>
    </>
  );
}

export default ProductListItem;
