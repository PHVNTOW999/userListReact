import React, {useEffect, useRef, useState} from 'react';
import UserCart from "./Components/UserCart";
function App() {
    const listLength = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const main = useRef(null);
    // main width in pixels
    const [width, setWidth] = useState(0)

    useEffect(() => {
        // @ts-ignore
        setWidth(main.current.offsetWidth)

    }, [width]);

    // @ts-ignore
    const className = width >= 700 ? "userList grid grid-cols-4" : "userList"

    return (
        <div className="App">
            <div className={className} ref={main}>
                { listLength.map((number) =>
                    <UserCart width={width} key={number} />
                )}
            </div>
        </div>
    );
}

export default App;
