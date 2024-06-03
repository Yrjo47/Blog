import React, { useRef } from "react"
import styles from "./styles/AddPostPage.module.css"
import { ContentEditableEvent } from "react-contenteditable"
import { useAddPostMutation } from "./api/postsApi"
import ContentEditable from "react-contenteditable"

const AddPostPage: React.FC = () => {
    const initialEditorFields = { title: "", body: "" }
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
            <div className={styles.post}>
                <div className={styles.content}>
                    <ContentEditable
                        className={styles.postTitle}
                        onChange={handleTitleChange}
                        html={editorTitle.current}
                        tagName="h1"
                        data-placeholder="Example"
                    />
                    <ContentEditable
                        className={styles.postBody}
                        onChange={handleBodyChange}
                        html={editorBody.current}
                        data-placeholder="Add some text..."
                    />
                </div>
                <div className={styles.bar}>
                    <button
                        className={styles.submitButton}
                        onClick={handleClick}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AddPostPage
