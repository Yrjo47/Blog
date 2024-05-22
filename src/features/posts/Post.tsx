import React from "react"
import styles from "./css/Posts.module.css"

const Post: React.FC = () => {
    return (
        <article className={styles.post}>
            <div className={styles.content}>
                <h2 className={styles.title}>Post0</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam, delectus maiores quod provident quasi repellendus
                    fugit sit temporibus deleniti minima?
                </p>
            </div>
            <div className={styles.bar}>
                <span className={styles.comments}>0 comments</span>
                <button className={styles.button}>Learn more</button>
            </div>
        </article>
    )
}

export default Post
