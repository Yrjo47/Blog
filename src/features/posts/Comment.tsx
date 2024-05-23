import React from "react"
import style from "./css/Comment.module.css"

const Comment: React.FC = () => {
    return (
        <div className={style.comment}>
            <span className={style.author}>Author</span>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit repudiandae eligendi natus?
            </p>
        </div>
    )
}

export default Comment
