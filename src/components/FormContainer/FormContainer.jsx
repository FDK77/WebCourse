import Form from '../Form/Forma'
import Archive from '../Archive/Archive'
import Wrapper from '../ui/wrapper/wrapper'
import style from './formContainer.module.css'

export default function FormContainer({ onAddPost, archivedPosts }) {
  return (
    <Wrapper>
      <div className={style.formContainer}>
        <Form onAddPost={onAddPost} />
        <Archive archivedPosts={archivedPosts} />
      </div>
    </Wrapper>
  )
}
