import React, { useRef } from "react"
import styles from "./css/AddPostPage.module.css"
import { ContentEditableEvent } from "react-contenteditable"
import { useAddPostMutation } from "./api/postsApi"
import ContentEditable from "react-contenteditable"

const AddPostPage: React.FC = () => {
    const initialEditorFields = { title: "Title", body: "Add some text..." }
    const editorTitle = useRef(initialEditorFields.title)
    const editorBody = useRef(initialEditorFields.body)
    const [addPost] = useAddPostMutation()

    const handleTitleChange = (e: ContentEditableEvent) => {
        editorTitle.current = e.target.value
    }

    const handleBodyChange = (e: ContentEditableEvent) => {
        editorBody.current = e.target.value
    }

    const handleClick = async () => {
        await addPost({
            title: editorTitle.current,
            text: editorBody.current,
        }).then((res) => console.log(res))

        editorTitle.current = initialEditorFields.title
        editorBody.current = initialEditorFields.body
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Write a new post</h1>
            <div className={styles.editor}>
                <ContentEditable
                    onChange={handleTitleChange}
                    html={editorTitle.current}
                />
                <ContentEditable
                    onChange={handleBodyChange}
                    html={editorBody.current}
                />
                <button className={styles.submitButton} onClick={handleClick}>
                    Submit
                </button>
            </div>
        </section>
    )
}

export default AddPostPage
