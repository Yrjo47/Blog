import React from "react"
import styles from "./css/AddPostPage.module.css"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { useAddPostMutation } from "./api/postsApi"

type IForm = {
    title: string
    text: string
}

const AddPostPage: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<IForm>()
    const [addPost, { isSuccess }] = useAddPostMutation()

    const submit: SubmitHandler<IForm> = (data) => {
        addPost(data)
        reset()
    }

    const error: SubmitErrorHandler<IForm> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    className={styles.titleInput}
                    {...register("title", { required: true, maxLength: 50 })}
                />
                <input
                    type="text"
                    className={styles.bodyInput}
                    {...register("text", { required: true, maxLength: 50 })}
                />
                <button className={styles.submitButton}>Submit</button>
            </form>
        </div>
    )
}

export default AddPostPage
