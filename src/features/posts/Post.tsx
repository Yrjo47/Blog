import React from "react"
import styles from "./css/Post.module.css"
import Comment from "./Comment"
import { useParams } from "react-router-dom"
import { useGetPostWithCommentsByIdQuery } from "./api/postsApi"
import PageNotFound from "../../components/PageNotFound"

const Post: React.FC = () => {
    const { id } = useParams() as { id: string }
    const { data: post, isFetching } = useGetPostWithCommentsByIdQuery(id)

    if (isFetching) {
        return <></>
    } else if (post) {
        return (
            <div className={styles.postWrapper}>
                <section className={styles.postSection}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{post?.title}</h2>
                        <p className={styles.text}>{post?.text}</p>
                    </div>
                </section>
                <section className={styles.commentsSection}>
                    <h3 className={styles.commentsTitle}>
                        Comments{" "}
                        <span className={styles.number}>
                            {post?.comments.length}
                        </span>
                    </h3>
                    <div className={styles.bar}>
                        <input
                            type="text"
                            placeholder="Leave a comment..."
                            className={styles.commentInput}
                        />
                        <button className={styles.commentButton}>
                            &#8594;
                        </button>
                    </div>
                    <div className={styles.commentsBlock}>
                        <ul className={styles.commentsList}>
                            {post?.comments.map((comment) => (
                                <li
                                    key={comment.id}
                                    className={styles.commentsListElement}
                                >
                                    <Comment
                                        author={comment.author}
                                        text={comment.text}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        )
    } else {
        return <PageNotFound />
    }
}

export default Post
