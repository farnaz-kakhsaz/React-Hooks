import React, { useContext } from "react"
import ComponentF from "./ComponentF"
import { UserContext, ChannelContext } from "../App"



export default function ComponentE() {
    const name = useContext(UserContext)
    const family = useContext(ChannelContext)


    return (
        <>

            <ComponentF />

            {name}{family}

        </>
    )
}