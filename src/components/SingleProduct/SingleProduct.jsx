import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../api/ProductsApi";
import styles from "./SingleProduct.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const product = data?.products.find(
    (product) => String(product.id) === String(id)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading product data. {error.message}</p>;
  }

  let imagesContent = null;
  if (product) {
    imagesContent = product.images.map((imageUrl, index) => (
      <div key={index}>
          <img className={styles.image} src={imageUrl} alt={`Product Image ${index + 1}`} />
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
          {product && (
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className={styles.price}>Price: ${product.price}</p>
              <hr />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
