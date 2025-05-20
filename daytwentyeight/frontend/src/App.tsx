import Sidebar from './common/Sidebar'
import Profile from './components/user/profile/Profile'

import { Outlet } from 'react-router-dom'


// contexts
import { UserDetailsProvider } from './contexts/UserDetails'

import './App.css'

const App = () => {
  return (
    <> 
      <Sidebar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  )
}

export default App
