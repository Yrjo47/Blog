import { configureStore } from "@reduxjs/toolkit"
import { postsApi } from "../features/posts/api/postsApi"

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
})
