import React, { useState } from 'react'
import styles from './form.module.css'

export default function Form({ onAddPost }) {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddPost({ author, title, category, content })
    setAuthor('')
    setTitle('')
    setCategory('')
    setContent('')
  }

  return (
    <aside className={styles.form}>
      <h1 className={styles.form__title}>Создать запись</h1>
      <form onSubmit={handleSubmit} className={styles.forma}>
        <label className={styles.forma__label}>Автор</label>
        <input
          className={styles.forma__input}
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label className={styles.forma__label}>Заголовок</label>
        <input
          className={styles.forma__input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className={styles.forma__label}>Категория</label>
        <input
          className={styles.forma__input}
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <label className={styles.forma__label}>Содержание</label>
        <textarea
          className={styles.forma__textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button className={styles.form__button} type="submit">
          Создать
        </button>
      </form>
    </aside>
  )
}
