import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RegisterRequest } from "@/types/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<{ message: string }, RegisterRequest>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
