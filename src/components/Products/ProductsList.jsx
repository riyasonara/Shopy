import { useGetAllProductsQuery } from "../../api/ProductsApi";
import MediaCard from "../ProductUI/ProductsUI";

const ProductsList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProductsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
        {data.products.map((product) => (
          <MediaCard products={product} key={product.id} />
        ))}
      </div>
    );
  } else if (isError) {
    content = <p style={{ color: "black" }}>Error: {error.message}</p>;
  }
  return <div className="pt-3">{content}</div>;
};

export default ProductsList;
