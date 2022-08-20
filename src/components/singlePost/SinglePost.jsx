import './singlePost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="/images/react.jpg" alt="singlePostImage"/>
        <div className="singlePostTitlebar">
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio exercitationem quia 
          </h1>
          <div className="singlePostButtons">
            <button className="titleButton edit">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="titleButton remove">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
        <div className="singlePostBody">
          <div className="bodyInfo">
            <p className="bodyDate"> Updated: 1 Hour ago</p>
            <p className="bodyAuthor"> Author: DevChase</p>
          </div>
          <article className="bodyDesc">
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, sequi vel fugit atque animi dolore, a expedita facere recusandae iusto numquam officiis eligendi dolor magnam. Inventore laboriosam iste reprehenderit!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, sequi vel fugit atque animi dolore, a expedita facere recusandae iusto numquam officiis eligendi dolor magnam. Inventore laboriosam iste reprehenderit!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, sequi vel fugit atque animi dolore, a expedita facere recusandae iusto numquam officiis eligendi dolor magnam. Inventore laboriosam iste reprehenderit!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, sequi vel fugit atque animi dolore, a expedita facere recusandae iusto numquam officiis eligendi dolor magnam. Inventore laboriosam iste reprehenderit!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, sequi vel fugit atque animi dolore, a expedita facere recusandae iusto numquam officiis eligendi dolor magnam. Inventore laboriosam iste reprehenderit!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sit, sequi vel fugit atque animi dolore, a expedita facere recusandae iusto numquam officiis eligendi dolor magnam. Inventore laboriosam iste reprehenderit!
          </article>
        </div>

      </div>
    </div>
  )
};

export default SinglePost;