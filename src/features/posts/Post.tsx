import React from "react"
import styles from "./css/Post.module.css"
import Comment from "./Comment"

const Post: React.FC = () => {
    return (
        <div className={styles.postWrapper}>
            <section className={styles.postSection}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Post0</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsam, delectus maiores quod provident quasi
                        repellendus fugit sit temporibus deleniti minima? Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Ipsam, delectus maiores quod provident quasi repellendus
                        fugit sit temporibus deleniti minima? Lorem ipsum dolor
                        sit amet consectetur, adipisicing elit. Ipsam, delectus
                        maiores quod provident quasi repellendus fugit sit
                        temporibus deleniti minima? Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Ipsam, delectus maiores
                        quod provident quasi repellendus fugit sit temporibus
                        deleniti minima? Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Ipsam, delectus maiores quod provident
                        quasi repellendus fugit sit temporibus deleniti minima?
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsam, delectus maiores quod provident quasi
                        repellendus fugit sit temporibus deleniti minima?
                    </p>
                </div>
            </section>
            <section className={styles.commentsSection}>
                <h3 className={styles.commentsTitle}>
                    Comments <span className={styles.number}>2</span>
                </h3>
                <div className={styles.bar}>
                    <input
                        type="text"
                        placeholder="Leave a comment..."
                        className={styles.commentInput}
                    />
                    <button className={styles.commentButton}>&#8594;</button>
                </div>
                <div className={styles.commentsBlock}>
                    <ul className={styles.commentsList}>
                        <li className={styles.commentsListElement}>
                            <Comment />
                        </li>
                        <li className={styles.commentsListElement}>
                            <Comment />
                        </li>
                        <li className={styles.commentsListElement}>
                            <Comment />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Post
