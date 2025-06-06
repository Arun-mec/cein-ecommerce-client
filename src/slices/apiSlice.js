import { BASE_URL } from "../../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',  
  }),
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: () => ({}),
});