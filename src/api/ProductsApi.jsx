import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({ url });
const baseUrl = "https://api.escuelajs.co/api/v1/";

export const productsAPI = createApi({
  reducerPath: "apiProducts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => createRequest(`products?offset=10&limit=38`),
    }),
    getSingleProduct: builder.query({
      query :(id)=> createRequest(`products/${id}`)
    })
  }),
});

export const { useGetAllProductsQuery , useGetSingleProductQuery } = productsAPI;
