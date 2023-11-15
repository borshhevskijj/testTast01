import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: ({ limit = 5, start = 0 }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    fetchPostById: build.query({
      query: (id = 1) => ({
        url: `/posts/${id}`,
      }),
      // query: (id) => `/posts/${id}`,
    }),
  }),
});
