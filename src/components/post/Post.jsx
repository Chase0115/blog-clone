import React from 'react';
import './post.css'

const Post = () => {
  return (
    <div className="post">
      <header className="postTitle">Title</header>
      <img className="postImg" src="/images/react.jpg" alt="PostImage" />
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut natus dolorem consectetur asperiores distinctio ducimus eveniet quibusdam tempora praesentium repudiandae quis non suscipit molestias, maiores iure, qui molestiae, soluta excepturi.
      </p>
      <p className="postDate"> 1 hour ago </p>
    </div>
  )
}

export default Post;