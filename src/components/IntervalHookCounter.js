import React, { useState } from "react"


export default function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    return <div> {count} </div>
}