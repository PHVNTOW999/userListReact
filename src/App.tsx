import React, {useEffect, useRef, useState} from 'react';
import UserCart from "./Components/UserCart";
function App() {
    // function for generate new array, need for map on userCart
    const generateArray = (max: number) => (
        [...new Array(Math.round(Math.random() * max))].map(() => Math.round(Math.random() * max))
    );

    const listLength = generateArray(50)

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
                { listLength.map((number, i) =>
                    <UserCart width={width} key={i} />
                )}
            </div>
        </div>
    );
}

export default App;
