import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

// contexts
import { AuthContext } from '@contexts/AuthContext'
// components
import Sidebar from './common/Sidebar'
// css
import './App.css'

const App = () => {
  const context = useContext(AuthContext);
  if (!context)
  {
    return;
  }
  const {loginStatus} = context;
  return (
    <> 
      {loginStatus && <Sidebar />}
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  )
}

export default App
