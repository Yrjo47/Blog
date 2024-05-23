import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost, IPostMutation, IComment } from "./types"

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3001/" }),
    tagTypes: ["Post", "Comment"],
    endpoints: (builder) => ({
        getAllPosts: builder.query<IPost[], void>({
            query: () => "posts",
            providesTags: ["Post"],
        }),
        getPostById: builder.query<IPost, string>({
            query: (id) => `posts?id=${id}`,
            providesTags: ["Post"],
        }),
        addPost: builder.mutation<IPost, IPostMutation>({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Post"],
        }),
        getCommentsByPostId: builder.query<IComment[], string>({
            query: (postId) => `comments?postId=${postId}`,
            providesTags: ["Comment"],
        }),
        addCommentByPostId: builder.mutation<IComment, IComment>({
            query: (body) => ({
                url: `comments`,
                method: "POST",
                body: body.comment,
            }),
            invalidatesTags: ["Comment"],
        }),
    }),
})

export const {
    useGetAllPostsQuery,
    useGetCommentsByPostIdQuery,
    useAddCommentByPostIdMutation,
    useAddPostMutation,
} = postsApi
