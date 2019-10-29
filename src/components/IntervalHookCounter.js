import React, { useEffect, useState } from "react"


export default function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    function counter() {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(counter, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return <div>
        Functional Component:
    <br />
        {count}
    </div>
}