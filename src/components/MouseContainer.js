import React, { useState } from "react"
import HookMouse from "./HookMouse"


export default function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <React.Fragment>
            <button onClick={() => setDisplay(!display)}>Toggel display</button>
            {
                display &&
                <HookMouse />
            }
        </React.Fragment>
    )
}