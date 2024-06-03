import React from "react"
import styles from "./styles/PostList.module.css"
import PostExcerpt from "./PostExcerpt"
import { useGetAllPostsQuery } from "./api/postsApi"

const PostList: React.FC = () => {
    const { data: posts, isFetching } = useGetAllPostsQuery()

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
                    />
                ))}
            </section>
        )
    }
}

export default PostList
