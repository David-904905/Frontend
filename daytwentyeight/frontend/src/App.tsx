import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

// contexts
import { AuthContext } from '@contexts/AuthContext'
// components
import Sidebar from './common/Sidebar'
// css
import './App.css'
import MobileNavBar from '@common/MobileNavBar'

const App = () => {
  const context = useContext(AuthContext);
  if (!context)
  {
    return;
  }
  const {loginStatus, isHome} = context;
  return (
    <> 
      {loginStatus && !isHome && <Sidebar />}
      {loginStatus && !isHome && <MobileNavBar />}
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  )
}

export default App
