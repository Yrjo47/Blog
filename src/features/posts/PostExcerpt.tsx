import React from "react"
import styles from "./css/PostExcerpt.module.css"
import { Link } from "react-router-dom"

type IProps = {
    title: string
    text: string
    id: string
    comments: number
}

const PostExcerpt: React.FC<IProps> = (props: IProps) => {
    return (
        <article className={styles.post}>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>{props.text}</p>
            </div>
            <div className={styles.bar}>
                <span className={styles.comments}>
                    {props.comments} comments
                </span>
                <Link to={`/post/${props.id}`} className={styles.button}>
                    Learn more &#x3e;&#x3e;
                </Link>
            </div>
        </article>
    )
}

export default PostExcerpt
