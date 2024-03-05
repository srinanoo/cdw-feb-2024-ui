import { useRef, useState } from "react";

export default function FnForms() {

    let usernameRef = useRef();
    let passwordRef = useRef();

    let [userState, setUserState] = useState("");
    let [passwordState, setPassword] = useState("");

    const handleForm = () => {
        console.log("Form is clicked");
        let username = document.getElementById("txtUsername").value;
        let password = document.getElementById("paPassword").value;

        console.log(username, password);
    }

    const handleForm1 = () => {
        console.log("Form is clicked");
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;

        console.log(username, password);
    }

    const handleForm2 = () => {
        console.log("Form is clicked");
        console.log(userState, passwordState);
    }

    return (
        <>
            <h1>DOM Form</h1>
            <form>
                <input type="text" id="txtUsername" placeholder="Username:" /><br />
                <input type="text" id="paPassword" placeholder="Password:" /><br />
                <input type="button" onClick={handleForm} value="Click" />
            </form>

            <h1>Half React/DOM Form</h1>
            <form>
                <input type="text" ref={usernameRef} placeholder="Username:" /><br />
                <input type="text" ref={passwordRef} placeholder="Password:" /><br />
                <input type="button" onClick={handleForm1} value="Click" />
            </form>

            <h1>Pure React Form</h1>
            <form>
                <input type="text" onChange={(e) => setUserState(e.target.value)} placeholder="Username:" /><br />
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password:" /><br />
                <input type="button" onClick={handleForm2} value="Click" />
            </form>
        </>
    )
}