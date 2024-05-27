import styles from './archive.module.css'

export default function Archive({ archivedPosts }) {
  return (
    <section className={styles.archive}>
      <h1 className={styles.archive__title}>Архив</h1>
      <ul>
        {archivedPosts.map((post, index) => (
          <li key={index} className={styles.archive__block}>
            {post.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
