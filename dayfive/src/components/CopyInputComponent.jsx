import React from 'react'
import { useState } from 'react'

import PopupContent from './PopupContent';

const CopyInputComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 10000)
        })
    }

    return (
        <>
            <div>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button onClick={handleCopy}>Copy</button>
            </div>
            <PopupContent copied={copied} /> {/* copied is a prop passed into the PopupContent component */}
        </>
    )
}

export default CopyInputComponent;