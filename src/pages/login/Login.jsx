import './login.css';

const Login = () => {
  return (
    <form className="loginForm">
      <div className="loginTop">
        <header>Login</header>
      </div>
      <div className="loginMiddle">
        <label
          htmlFor="userId"  className="loginLabel">User ID
        </label>
        <input type="text" name="userId" id="userId" className="loginInput"
        placeholder="User ID"/>
        <label 
          htmlFor="userPassword"  className="loginLabel">Password
        </label>
        <input type="password" name="userPassword" id="userPassword" className="loginInput" placeholder="Password"/>
        <button className="loginBtn"> 
          Continue with Email 
        </button>
      </div>
      <div className="loginBottom">
        <button className="loginWithOth">
          <i className="loginIcon fa-brands fa-google"></i>
          Continue with Google</button>
        <button className="loginWithOth">
          <i className="loginIcon fa-brands fa-facebook"></i>
          Continue with Facebook</button>
        <button className="loginWithOth">
          <i className="loginIcon fa-brands fa-github"></i>
          Continue with GitHub</button>
      </div>
    </form>
  )
}

export default Login;