import React from 'react'
import { useState } from 'react'
import ChangeThemeComponent from './ChangeThemeComponent';

const SwitchComponent = () => {
    const [sw, setSwitch] = useState(false);

    
    return (
        <>
            {
                sw ? <span>Light</span> : <span>Dark</span>
            }
            <br />
            <input type="text" key={sw ? "white" : "dark" } />
            <button onClick={() => setSwitch((sw) => !sw)}>Switch</button>
            <ChangeThemeComponent sw={sw} />
        </>
    )
}

export default SwitchComponent;