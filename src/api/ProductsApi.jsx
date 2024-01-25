import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({ url });
const baseUrl = "https://dummyjson.com/";

export const productsAPI = createApi({
  reducerPath: "apiProducts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => createRequest(`products`),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsAPI;
