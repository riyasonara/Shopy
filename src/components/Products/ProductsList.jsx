import { useState } from "react";
import { useGetAllProductsQuery } from "../../api/ProductsApi";
import YouTube from "../Loader/Skeleton";
import PaginationRounded from "../Pagination/Pagination";
import MediaCard from "../ProductUI/ProductsUI";

const ProductsList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  let content;
  if (isLoading) {
    content = <YouTube />;
  } else if (isSuccess) {
    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    content = (
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {currentProducts.map((product) => (
            <MediaCard products={product} key={product.id} />
          ))}
        </div>
        <PaginationRounded
          onPageChange={paginate}
          pageCount={Math.ceil(data.length / productsPerPage)}
        />
      </>
    );
  } else if (isError) {
    content = <p style={{ color: "black" }}>Error: {error.message}</p>;
  }
  return (
    <div className="pt-3" style={{ backgroundColor: "#f5f7f9" }}>
      {content}
    </div>
  );
};

export default ProductsList;
