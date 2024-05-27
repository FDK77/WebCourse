import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Posts from '../components/Posts/Posts'
import FormContainer from '../components/FormContainer/FormContainer'

export default function MainPage() {
  const [posts, setPosts] = useState([])
  const [archivedPosts, setArchivedPosts] = useState([])

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index))
  }

  const archivePost = (index) => {
    const post = posts[index]
    setArchivedPosts([...archivedPosts, post])
    deletePost(index)
  }

  return (
    <div className="">
      <Header />
      <main
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px',
        }}
      >
        <Posts posts={posts} onDelete={deletePost} onArchive={archivePost} />
        <FormContainer onAddPost={addPost} archivedPosts={archivedPosts} />
      </main>
    </div>
  )
}
