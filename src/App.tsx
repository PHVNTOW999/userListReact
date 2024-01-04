import React from 'react';
import UserCart from "./UserCart";
function App() {
    const listLength = [1, 2, 3]

    return (
        <div className="App">
            <div className="userList grid grid-cols-4">
                { listLength.map((number) =>
                    <UserCart key={number} />
                )}
            </div>
        </div>
    );
}

export default App;
