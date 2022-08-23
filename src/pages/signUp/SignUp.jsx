import './signUp.css';

const SignUp = () => {
  return (
    <div className="signUp">
    <form className="loginForm">
      <div className="loginTop">
        <header>Register</header>
      </div>
      <div className="loginMiddle">
        <input type="text" name="userId" id="userId" className="loginInput"
        placeholder="User Email"/>
        <input type="password" name="userPassword" id="userPassword" className="loginInput" placeholder="Password"/>
        <input type="password" name="userPassword" id="userPassword" className="loginInput" placeholder="Confirm Password"/>
      </div>
      <div className="loginBottom">
        <button className="loginWithOth signUpBtn">
          Sign Up</button>
      </div>
    </form>
    </div>
  )
}

export default SignUp;