import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost, IPostMutation, IComment, IPostWithComments } from "./types"

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    tagTypes: ["Post", "Comment"],
    endpoints: (builder) => ({
        getAllPosts: builder.query<IPost[], void>({
            query: () => "posts",
            providesTags: ["Post"],
        }),
        getAllPostsWithComments: builder.query<IPostWithComments[], void>({
            query: () => "posts?_embed=comments",
        }),
        getPostWithCommentsById: builder.query<IPostWithComments, string>({
            query: (id) => `posts?_embed=comments&id=${id}`,
            transformResponse: (response: IPostWithComments[]) => response[0],
        }),
        getPostById: builder.query<IPost, string>({
            query: (id) => `posts/${id}`,
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
                body: body.text,
            }),
            invalidatesTags: ["Comment"],
        }),
    }),
})

export const {
    useGetAllPostsQuery,
    useGetPostByIdQuery,
    useGetCommentsByPostIdQuery,
    useAddCommentByPostIdMutation,
    useAddPostMutation,
    useGetAllPostsWithCommentsQuery,
    useGetPostWithCommentsByIdQuery,
} = postsApi
