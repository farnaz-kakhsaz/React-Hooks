import React, { useEffect, useState } from "react"
import axios from "axios"


export default function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [postId, setPostId] = useState(1)

    function handleClick() {
        setPostId(id)
    }

    function handleChange(event) {
        const target = event.target
        setId(target.value)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
            console.log(response.data)
            setPost(response.data)
        }
        ).catch(
            error =>
                console.log(error)
        )
    }, [id])

    return (
        <>
            <input type="text" value={id} onChange={handleChange} />
            <button onClick={handleClick}>send</button>
            <div>
                {post.title}
            </div>
        </>
    )
}