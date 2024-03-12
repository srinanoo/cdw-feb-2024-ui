export default function Protected({logged, children}) {
    if(logged) {
        return children;
    } else {
        return (
            <>
                <h3>You need to logged in to view this Page.</h3>
            </>
        )
    }
}