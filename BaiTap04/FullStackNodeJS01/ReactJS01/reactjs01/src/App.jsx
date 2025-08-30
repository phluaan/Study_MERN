import { useContext, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { Header } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/layout/header.jsx';
import { AuthContext } from './components/context/auth.context.jsx';
import { Spin } from 'antd';

function App() {
  const {setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchAccount = async () => {
      setAppLoading(true);
      const res = await axios.get(`/v1/api/user`);
      if(res && !res.message) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: res.email ,
            name: res.name
    }
  })
      }
      setAppLoading(false);
    }
    fetchAccount();
  }, [])
  return (
    <div>
      {appLoading === true ? 
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <spin>

        </spin>
    </div>
    :
    <>
      <Header/>
      <Outlet/>
    </>}
</div>  
)
}


export default App
