import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <p className={styles.header__title}>Блог</p>
        </header>
    );
}