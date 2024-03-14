import React from "react";

export default class ClsCycleComp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            stateName: "",
            age: 0
        }
    }

    // static getDerivedStateFromProps(props) {
    //     return {"stateName": props.name};
    // }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({"age": 20});
        }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate...called");
        console.log(nextState.age, "new state");
        console.log(this.state.age, "old state");
        return (nextState.age !== this.state.age)
            ? true : false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.age, "before updating...");
        return "";
    }

    componentDidUpdate() {
        setTimeout(() =>{
            this.setState({"age": 20});
        }, 5000);
    }

    render() {
        return (
            <>
                <h2>Class Component</h2>
                <p>Name (Props): {this.props.name}</p>
                <p>Name (State): {this.state.stateName}</p>
                <p>Age (State): {this.state.age}</p>

                {
                    this.state.age !== 20
                        ?
                        <ChildComp />
                        :
                        <></>
                }
                
            </>
        )
    }
}

class ChildComp extends React.Component {
    constructor() {
        super();
        this.logged = false;
    }

    componentDidMount() {
        console.log(this.logged, "componentDidMount");
    }

    componentWillUnmount() {
        this.logged = true;
        alert("Component is going to unmounted...")
        console.log(this.logged, "componentWillUnmount");
    }

    render() {
        <>
            <h3>Child Class Component</h3>
        </>
    }
}