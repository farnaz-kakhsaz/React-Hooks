import React from "react"
import { UserContext, ChannelContext } from "../App"
export default function ComponentF() {


    return (
        <UserContext.Consumer>
            {
                name =>
                    <ChannelContext.Consumer>
                        {family =>
                            <div>

                                name:{name}
                                family:{family}
                            </div>
                        }
                    </ChannelContext.Consumer>
            }
        </UserContext.Consumer>

    )
}