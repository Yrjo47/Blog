import React from "react"
import styles from "./Header.module.css"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <a href="/">Blog 0</a>
                </div>
                <button className={styles.button}>Create</button>
            </div>
        </header>
    )
}

export default Header
