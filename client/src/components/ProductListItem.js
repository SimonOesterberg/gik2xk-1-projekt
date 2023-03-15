import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
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
      <ImageListItem key={item.imageUrl} cols={cols} rows={rows}>
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
            <>
              <IconButton
                sx={{ color: "white" }}
                aria-label={`star ${item.name}`}
              >
                <StarBorderIcon />
              </IconButton>

              <IconButton
                sx={{ color: "white" }}
                aria-label={`info ${item.name}`}
              >
                <Link to={`/Product/${item.id}`}>
                  <InfoIcon />
                </Link>
              </IconButton>
            </>
          }
          actionPosition="left"
        />
      </ImageListItem>
    </>
  );
}

export default ProductListItem;
