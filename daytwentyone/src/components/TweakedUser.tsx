import { FC } from "react"
import { BaseInfo } from "../types"

const TweakedUser: FC<BaseInfo> = ({id, name, email}) => {
  return (
    <>
        <div className="userContainer">
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <p>Email: {email}</p>
        </div>
    </>
  )
}

export default TweakedUser