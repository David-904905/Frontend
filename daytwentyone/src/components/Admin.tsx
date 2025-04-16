import { FC } from 'react'
import { AdminInfo } from '../types'

const Admin: FC<AdminInfo> = ({email, id, name, roles, superRole}) => {
  return (
    <>
      <div className="admin-details">
        <h2>Email: {email}</h2>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        {
          roles.map((role, index) => (
            <ul key={index}>
              <li>{role}</li>
            </ul>
          ))
        }
        <button onClick={superRole}>Perform Role</button>
      </div>
    </>
  )
}

export default Admin;