import React from "react"
import styles from "./css/PostList.module.css"
import PostExcerpt from "./PostExcerpt"

const PostList: React.FC = () => {
    return (
        <section className={styles.posts}>
            <PostExcerpt />
            <PostExcerpt />
            <PostExcerpt />
        </section>
    )
}

export default PostList
