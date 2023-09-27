import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApiQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3100",
  }),
  endpoints: () => ({}),
});
