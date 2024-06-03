import React from "react"
import styles from "./styles/PostExcerpt.module.css"
import { Link } from "react-router-dom"

type IProps = {
    title: string
    text: string
    id: string
}

const PostExcerpt: React.FC<IProps> = (props: IProps) => {
    return (
        <article className={styles.post}>
            <div className={styles.content}>
                <h2
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: props.title }}
                ></h2>
                <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: props.text }}
                ></p>
            </div>
            <div className={styles.bar}>
                <span className={styles.comments}>XXX comments</span>
                <Link to={`/post/${props.id}`} className={styles.button}>
                    Learn more &#x3e;&#x3e;
                </Link>
            </div>
        </article>
    )
}

export default PostExcerpt
