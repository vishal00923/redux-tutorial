import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => 'accounts',
      providesTags: ['accounts'],
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    addAccount: builder.mutation({
      query: (amount, id) => ({
        url: 'accounts',
        method: 'POST',
        body: { amount, id },
      }),
      invalidatesTags: ['accounts'],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['accounts'],
    }),
    updateAccount: builder.mutation({
      query: ({ amount, id }) => ({
        url: `accounts/${id}`,
        method: 'PATCH',
        body: { amount },
      }),
      invalidatesTags: ['accounts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
