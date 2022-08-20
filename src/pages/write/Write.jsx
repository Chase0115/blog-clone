import './write.css'

const Write = () => {
  return(
    <div className="write">
      <img 
        className="writeImg"
        src="/images/writeImage.jpeg" 
        alt="writeImage" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input 
            type="file" 
            style={{display: "none"}} id="fileInput"/>
          <input 
            type="text" 
            placeholder="Title" 
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell me your story ..."
            type="text"
            className="writeInput writeText">
            </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
};

export default Write;