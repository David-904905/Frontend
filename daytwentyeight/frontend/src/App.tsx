import Sidebar from './common/Sidebar'
import Profile from './components/user/profile/Profile'


// contexts
import { UserDetailsProvider } from './contexts/UserDetails'

import './App.css'

const App = () => {
  return (
    <>
      <UserDetailsProvider>
        <Sidebar />
        <Profile />
        
      </UserDetailsProvider>
    </>
  )
}

export default App
