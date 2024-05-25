import React from "react"
import styles from "./css/PostList.module.css"
import PostExcerpt from "./PostExcerpt"
import { useGetAllPostsWithCommentsQuery } from "./api/postsApi"

const PostList: React.FC = () => {
    const { data: posts, isFetching } = useGetAllPostsWithCommentsQuery()

    if (isFetching) {
        return <div>is loading</div>
    } else {
        return (
            <section className={styles.posts}>
                {posts?.map((post) => (
                    <PostExcerpt
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        comments={post.comments.length}
                    />
                ))}
            </section>
        )
    }
}

export default PostList
