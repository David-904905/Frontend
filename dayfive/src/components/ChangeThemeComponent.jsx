import React from 'react'

// using state to change the color of the theme of the app.

const ChangeThemeComponent = ({sw}) => {
    const changeTheme = () => {
        if(sw){
            document.body.style.background = "white";
            document.body.style.color = "black";
        }
        else
        {
            document.body.style.background = "black";
            document.body.style.color = "white";
        }
    }
  return (
    <>
        <button onClick={changeTheme}>Switch Theme</button>
    </>
  )
}

export default ChangeThemeComponent