import React , {Component} from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            messsage: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState ({
            messsage: 'Thank You for Subscribing'
        })
    }
    render() {
        return (
        <div>
        <h1>{this.state.messsage}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message