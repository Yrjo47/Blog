import React from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link to="/">Blog 0</Link>
                </div>
                <Link to="/post" className={styles.button}>
                    Add +
                </Link>
            </div>
        </header>
    )
}

export default Header
