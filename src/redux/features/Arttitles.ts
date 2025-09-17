import baseApi from "./api";

const ArtTitlesApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        artTitles: builder.query<{ _id: string, name: string }[], void>({
            query: () => ({
                url: `/api/art-titles`,
            }),
            providesTags: ['titles']
        }),
        addArtTitle: builder.mutation<{ message: string }, any>({
            query: (data) => ({
                url: `/api/art-titles`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['titles']
        }),

    })

})

export const { useArtTitlesQuery, useAddArtTitleMutation } = ArtTitlesApi