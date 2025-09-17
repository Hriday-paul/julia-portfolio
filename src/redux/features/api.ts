import { RemoveCookie } from '@/utils/AuthAcrion';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    // baseUrl: process.env.NEXT_PUBLIC_BASE_API,
    credentials: "include",
    // prepareHeaders: (headers, { endpoint }) => {

    //     if (endpoint == 'youtubeVideos') {
    //         return;
    //     } else {
    //         return headers;
    //     }

    //     // const token = getFromLocalStorage("accessToken")
    //     // // const token = cookies.get("accessToken");

    //     // if (token) {
    //     //     headers.set("Authorization", `Bearer ${token}`);
    //     // }

    // },
});

// Refresh the base----------------------------------------------------------------
const baseQueryWithReauth: typeof baseQuery = async (
    args,
    api,
    extraOptions,
) => {

    const result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        await RemoveCookie();
        window.location.href = '/admin/login';
        // api.dispatch({ type: "auth/logout" });
        // api.dispatch(removeUser());
    }

    return result;
};


const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['user', "titles", "arts", "highlights"],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        loginAdmin: builder.mutation<{ message: string }, { password: string }>({
            query: (data) => ({
                url: `/api/login`,
                method: 'POST',
                body: data,
            }),
        }),
    })
});

export const { useLoginAdminMutation } = baseApi

export default baseApi;