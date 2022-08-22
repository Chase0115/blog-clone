import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';

const Setting = () => {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingMenu">
          <p className="settingTitle update">
          Update Your Account</p>
          <p className="settingTitle delete">
          Delete Account</p>
        </div>
        <form className="settingProfile">
          <div className="updateTop">
            <div className="updateTopLeft">
              <img 
                className="profileImg"
                src="/images/react.jpg" alt="profilePhoto" />
              <label htmlFor="fileInput">
              </label>
              <input type="file" name="fileInput" id="fileInput"/>
            </div>
            <div className="updateTopRight">
              <label className="updateLable" htmlFor="userName">User Name</label>
              <input className="updateInput" type="text" name="userName" id="userName" placeholder="Chase Sim"/>
              <label className="updateLable" htmlFor="email">User Email</label>
              <input className="updateInput" type="text" name="email" id="email" placeholder="googoo@gmail.com"/>
              <label className="updateLable" htmlFor="password">Password</label>
              <input className="updateInput" type="password" name="password" id="password" />
            </div>
          </div>
          <div className="updateBottom">
            <button         className="settingSubmit">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  )
};

export default Setting;