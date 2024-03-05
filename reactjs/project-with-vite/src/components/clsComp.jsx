import React from "react";
export default class ClassComp1 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            "id": 1,
            "name": "Dinesh",
            "active": true,
            "menus": ["m1", "m2", "m3", "m4"],
            "userObj": {
                "id": 1,
                "address": "address 1"
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({...this.state, "name": "Something new Name"})
    }

    render() {
        return (
            <>
                {this.props.name}
                <p>{this.state.name}</p>
                <p>{this.state.active.toString()}</p>
                <p><button onClick={this.handleClick}>Update State</button></p>

                <p><button onClick={() => this.setState({...this.state, "active" : false})}>Handle Update</button></p>
            </>
        )
    }
}