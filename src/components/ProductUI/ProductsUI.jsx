/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const MediaCard = ({ products }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        sx={{ height: 240, objectFit: "contain" }}
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
      </CardActions>
    </Card>
  );
};

export default MediaCard;
