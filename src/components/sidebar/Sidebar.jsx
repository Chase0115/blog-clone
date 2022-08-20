import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <div className="sidebarItem">
          <p className="sidebarTitle">ABOUT ME</p>
          <div className="titleLine"></div>
        <img className="sidebarImg" src="/images/aboutMe.jpg" alt="About Me" />
        </div>
        <div className="sidebarItem">
          <p>CATEGORIES</p>
          <div className="titleLine"></div>
          <ul className="catList">
            <li className="catItem">🖥️Coding</li>
            <li className="catItem">📖CS knowledge</li>
            <li className="catItem">🚩Projects</li>
            <li className="catItem">😎Life</li>
            <li className="catItem">📽️Cinema</li>
          </ul>
          </div>
          <div className="sidebarItem">
          <p>CONTACT ME!</p>
          <div className="titleLine"></div>
          <button>
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button>
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button>
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>
    </div>
  )
  }

export default Sidebar;