import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <header className="contactTitle">Contact Me</header>
      <p className="contactBody">If you want to contact me for some reason </p> 
      <p className="contactBody">get in touch.</p>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Name"/>
        <input type="text" className="email" placeholder="Email"/>
        <textarea name="message" id="" cols="30" rows="10" className="message" placeholder="Message"></textarea>
        <button type="submit" className="sendBtn">
          Send
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  )
}

export default Contact;