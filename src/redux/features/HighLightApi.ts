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


export const { useAllHighLightQuery, useAddHighlightMutation, useDeleteHighlightMutation } = HighLightApi;