/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { RiHeart3Fill } from "react-icons/ri";
import { useState, useCallback } from "react";
import Swal from "sweetalert2";

const MediaCard = ({ products }) => {
  const [toggleHeart, setToggleHeart] = useState(false);

  const changeColor = useCallback(() => {
    setToggleHeart(!toggleHeart);
    if (toggleHeart === false) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item is wishlishted",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }, [toggleHeart]);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        sx={{ height: 240, objectFit: "contain", marginTop: "15px" }}
        component="img"
        alt={products.title}
        image={products.images[0]}
        title={products.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {products.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {products.description.slice(0, 100)} ...
          <u style={{ color: "blue", cursor: "pointer" }}>
            <Link to={`/everything/${products.id}`}>Read more</Link>
          </u>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to={`/everything/${products.id}`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
        <RiHeart3Fill
          style={{ color: toggleHeart ? "red" : "inherit", cursor: "pointer" }}
          onClick={changeColor}
        />
      </CardActions>
    </Card>
  );
};

export default MediaCard;
