import baseApi from "./api";
import { IART } from "./Types";

const ArtApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        allArts: builder.query<IART[], void>({
            query: () => ({
                url: `/api/arts`,
            }),
            providesTags: ["arts"]
        }),
        addNewArt: builder.mutation<{ message: string }, any>({
            query: (body) => ({
                url: `/api/arts`,
                method: "POST",
                body
            }),
            invalidatesTags: ["arts"]
        }),
        deleteArt: builder.mutation<{ message: string }, any>({
            query: (body) => ({
                url: `/api/arts`,
                method: "DELETE",
                body
            }),
            invalidatesTags: ["arts"]
        }),

    })

})


export const { useAllArtsQuery, useAddNewArtMutation, useDeleteArtMutation } = ArtApi;