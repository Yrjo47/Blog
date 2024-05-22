import React from "react"
import styles from "./css/PostList.module.css"
import Post from "./Post"

const PostList: React.FC = () => {
    return (
        <section className={styles.posts}>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default PostList
