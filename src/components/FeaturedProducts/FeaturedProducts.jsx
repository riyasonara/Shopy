import MediaCard from "../ProductUI/ProductsUI";
import { useGetAllProductsQuery } from "../../api/ProductsApi";

const FeaturedProducts = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProductsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const filteredProducts = (data || []).slice(0, 3);

    content = (
      <>
        <h2 style={{color:"#3D3B40", textAlign:"center", margin:"25px 0", fontSize:"2.7rem"}}>Featured Products</h2>
        <div style={{height:"2px",backgroundColor:"gray", width:"170px", margin:"auto",alignContent:"center",border:"1px solid gray" , borderRadius:"20px"}}></div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop:"25px",
            marginBottom:"20px"
          }}
        >
          {filteredProducts.map((product) => (
            <MediaCard products={product} key={product.id} />
          ))}
        </div>
      </>
    );
  } else if (isError) {
    content = <p style={{ color: "black" }}>Error: {error.message}</p>;
  }
  return <div className="pt-3">{content}</div>;
};

export default FeaturedProducts;
