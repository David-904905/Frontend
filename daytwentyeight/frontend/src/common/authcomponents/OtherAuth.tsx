import React from 'react'

const OtherAuth = () => {
  return (
    <div className='google-apple-micro'>
        <div className="otherauth-services-container">
            <img height={"25px"} src="/logos/google.png" alt="google-logo" />
            <p>sign in with google</p>
        </div>
        <div className="otherauth-services-container">
            <img height={"35px"} src="/logos/appl.png" alt="apple-logo" />
            <p>sign in with apple</p>
        </div>
        <div className="otherauth-services-container">
            <img height={"40px"} src="/logos/microsoft.png" alt="microsoft-logo" />
            <p>sign in with microsoft</p>
        </div>
    </div>
  )
}

export default OtherAuth