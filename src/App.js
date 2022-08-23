import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Setting from './pages/setting/Setting';
import SignUp from './pages/signUp/SignUp';
import Single from './pages/single/Single';
import Write from './pages/write/Write';


function App() {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}

export default App;
