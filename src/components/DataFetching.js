import React, { useEffect, useState } from "react"
import axios from "axios"


export default function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response)
            setPosts(response.data)
        }
        ).catch(
            error =>
                console.log(error)
        )
    }, [])
    return <ul>
        {posts.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>

}