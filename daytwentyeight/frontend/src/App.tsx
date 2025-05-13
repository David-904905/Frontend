import Sidebar from './components/Sidebar'
import Profile from './components/Profile'


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
