import React, { Component } from "react"


export default class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.counter = this.counter.bind(this)
    }

    counter() {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        this.interval = setInterval(this.counter, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        return <div>
            Class Component:
            <br />
            {this.state.count}
        </div>


    }
}