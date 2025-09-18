import { IHighLight } from "@/app/api/highlights/HighLightsModel";
import baseApi from "./api";

const HighLightApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        allHighLight: builder.query<IHighLight[], void>({
            query: () => ({
                url: `/api/highlights`,
            }),
            providesTags: ["highlights"]
        }),
        highLightDetails: builder.query<IHighLight, { id: string }>({
            query: ({ id }) => ({
                url: `/api/highlights/${id}`,
            }),
            providesTags: (_, __, { id }) => [{ type: "highlights", id }]
        }),
        addHighlight: builder.mutation<{ message: string }, any>({
            query: (body) => ({
                url: `/api/highlights`,
                method: "POST",
                body
            }),
            invalidatesTags: ["highlights"]
        }),
        deleteHighlight: builder.mutation<{ message: string }, any>({
            query: (body) => ({
                url: `/api/highlights`,
                method: "DELETE",
                body
            }),
            invalidatesTags: ["highlights"]
        }),

    })

})


export const { useAllHighLightQuery, useAddHighlightMutation, useDeleteHighlightMutation, useHighLightDetailsQuery } = HighLightApi;