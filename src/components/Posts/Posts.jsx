import Wrapper from '../ui/wrapper/wrapper'
import styles from './posts.module.css'

function Posts({ posts, onDelete, onArchive }) {
  return (
    <div style={{ flexGrow: '1', marginRight: '20px' }}>
      <Wrapper>
        <div className={styles.posts}>
          <p className={styles.posts__title}>Записи</p>
          <div>
            {posts.map((post, index) => (
              <article key={index} className={styles.post}>
                <div>
                  <h1 className={styles.post__title}>{post.title}</h1>
                  <p className={styles.post__text}>
                    Категория:
                    <span className={styles.post__bold}>{post.category}</span>
                  </p>
                  <p className={styles.post__text}>
                    Автор:
                    <span className={styles.post__bold}>{post.author}</span>
                  </p>
                  <p className={styles.post__text}>{post.content}</p>
                </div>
                <div className={styles.post__buttons}>
                  <button
                    className={styles.post__button_delete}
                    onClick={() => onDelete(index)}
                  >
                    Удалить
                  </button>
                  <button
                    className={styles.post__button_archive}
                    onClick={() => onArchive(index)}
                  >
                    Архив
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Posts
