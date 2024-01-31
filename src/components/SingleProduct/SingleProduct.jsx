import styles from "./SingleProduct.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slices/cartSlice";
import { LuShoppingCart } from "react-icons/lu";
import { useParams, Link } from "react-router-dom";
import { useGetSingleProductQuery } from "../../api/ProductsApi";
import YouTube from "../Loader/Skeleton";

const SingleProduct = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isLoading) {
    return <YouTube/>;
  }

  if (isError) {
    return <p>Error loading product data. {error.message}</p>;
  }

  let imagesContent = null;
  if (data) {
    imagesContent = data.images.map((imageUrl, index) => (
      <div key={index}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={`Product Image ${index + 1}`}
        />
      </div>
    ));
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imagediv}>
          <Slider {...settings}>{imagesContent}</Slider>
        </div>

        <div className={styles.rightcontainer}>
          {/* Display product details on the right side */}
          {data && (
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p className={styles.price}>Price: ${data.price}</p>
              <div className={styles.buttonsContainer}>
                <Button
                  onClick={() => {
                    let item = null;
                    item = { ...data, quantity: 1 };
                    dispatch(addToCart(item));
                  }}
                  variant="contained"
                  startIcon={<LuShoppingCart />}
                >
                  Add to Cart
                </Button>
                <Button component={Link} to="/cart" variant="outlined">
                  Items in Cart: ({cartItems.length})
                </Button>
              </div>
              <hr />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
