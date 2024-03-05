import { useState } from "react";

function Function1(props) {
    // props.name = "New Name";
    let localName = "Local Name";

    const [name, setName] = useState("Default Name");
    const [menu, setMenu] = useState(["M1", "M2", "M3", "M4"]);
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        localName = "New Local Name";
        setName("New State Name Reassigned");
        setMenu(["M1-U", "M2-U", "M3-U", "M4-U"])

        console.log(localName);
    }

    console.log("Function 1...");
    return (
        <>
            <h2>Function 1</h2>
            {/* {props.name}, {props.age} */}

            <p>Local Name: {localName}</p>
            <p>State Name: {name}</p>
            <p>Menu: {menu}</p>
            <button onClick={handleClick}>Change Name</button>

            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(1)}>Update Counter</button>
        </>
    )
}

function Function2() {
    const [logged, setLogged] = useState(false)
    return (
        <>
            <h2>Function 2</h2>

            

            {
                logged
                    ?
                    <>
                        <Function3 />
                        <button onClick={() => setLogged(false)}>Logout</button>
                    </>
                    :
                    <button onClick={() => setLogged(true)}>Login</button>
            }
        </>
    )
}

function Function3() {
    return (
        <>
            <h2>Function 3</h2>
        </>
    )
}

export default Function1;
export { Function2 };