import { FC } from "react";

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}

const UserTwo: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <>
        <div className="useElements">
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isStudent}</p>
        </div>
    </>
  );
};


export default UserTwo;