export type IPost = {
    id: string
    title: string
    text: string
    comments: string[]
}

export type IPostMutation = {
    title: string
    text: string
}

export type IComment = {
    id: string
    comment: string
    postId: string
}
