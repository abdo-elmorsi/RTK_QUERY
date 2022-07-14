import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AllApi = createApi({
    reducerPath: "AllApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/",
    }),
    tagTypes: ["All"],
    endpoints: (builder) => ({
        All: builder.query({
            query: (param) => `${param}`,
            providesTags: ["All"],
        }),
        One: builder.query({
            query: ({ param, id }) => `${param}/${id}`,
            providesTags: ["All"],
        }),
        AddOne: builder.mutation({
            query: ({ param, data }) => ({
                url: `${param}`,
                method: "POST",
                body: { ...data },
            }),
            invalidatesTags: ["All"],
        }),
        UpdateOne: builder.mutation({
            query: ({ param, id, data }) => ({
                url: `${param}/${id}`,
                method: "PUT",
                body: { ...data },
            }),
            invalidatesTags: ["All"],
        }),
        DeleteOne: builder.mutation({
            query: ({ param, id }) => ({
                url: `${param}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["All"],
        }),
    }),
});

export const {
    useAllQuery,
    useOneQuery,
    useAddOneMutation,
    useUpdateOneMutation,
    useDeleteOneMutation,
} = AllApi;
