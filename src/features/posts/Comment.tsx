import React from "react"
import style from "./css/Comment.module.css"

type IProps = {
    author: string
    text: string
}

const Comment: React.FC<IProps> = (props) => {
    return (
        <div className={style.comment}>
            <h4 className={style.author}>{props.author}</h4>
            <p className={style.text}>{props.text}</p>
        </div>
    )
}

export default Comment
