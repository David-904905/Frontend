import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({copied}) => {
  return createPortal(
    <>
        {
            copied && (
                <div style={{position: "absolute", bottom: "3rem"}}>Copied to Clipboard</div>
            )
        }
    </>, document.getElementById("pop-up-component")
  )
}

export default PopupContent