export type IPost = {
    id: string
    title: string
    text: string
}

export type IComment = {
    id: string
    author: string
    text: string
    postId: string
}

export type ICommentMutation = {
    author: string
    text: string
    postId: string
}

export type IPostMutation = {
    title: string
    text: string
}
