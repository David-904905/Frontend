import HomeNav from "@common/home/HomeNav"
import "@css/error.css"
import { useContext, useEffect } from "react"

import { AuthContext } from "@contexts/AuthContext"


const NotFound = () => {
    const context = useContext(AuthContext);
    if (!context)
    {
        return;
    }
    const {setIsHome} = context;
    useEffect(() => {
        setIsHome(true);
    }, [])
  return (
    <>  
        <HomeNav />
        <div className="notfound-container">
            <div className="notfound-img">
                <img src="/background/notfoundone.png" alt="not-found-img" />
            </div>
            <div className="notfound-message">
                <h2>Error 404</h2>
                <p>Opps!, the page you requested for was not found</p>
            </div>
        </div>
    </>
  )
}

export default NotFound