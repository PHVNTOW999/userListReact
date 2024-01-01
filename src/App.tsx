import React, {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios'

function App() {

    const [user, setUser] = useState<any>('')

    const getUser = async () => {
        await axios.get('https://random-data-api.com/api/v2/users')
            .then((res) => {
                setUser([...res.data])
            })
    }

    useEffect(() => {
        getUser()
        console.log(user)
    }, [])

    return (
        <div className="App">

            {/*<h1>{ user }</h1>*/}
            bhjjhb

        </div>
    );
}

export default App;
