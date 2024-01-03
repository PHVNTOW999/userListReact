import React from 'react';
import UserCart from "./UserCart";
function App() {
    const listLength = [1, 2, 3]

    return (
        <div className="App">
            {
                listLength.map((user, index) => {
                    <UserCart key={index} />
                })
            }
        </div>
    );
}

export default App;
