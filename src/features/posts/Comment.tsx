import React from "react"
import style from "./css/Comment.module.css"

const Comment: React.FC = () => {
    return (
        <div className={style.comment}>
            <h4 className={style.author}>Author</h4>
            <p className={style.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit repudiandae eligendi natus? Uorem ipsum dolor sit
                amet consectetur adipisicing elit. Nihil, corporis? fafafsa.
            </p>
        </div>
    )
}

export default Comment
