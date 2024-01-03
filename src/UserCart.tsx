import React, {useEffect, useState} from 'react';
import axios from 'axios'

const UserCart = () => {
    interface userState {
        avatar: String,
        uid: String,
        username: String,
    }

    const [user, setUser] = useState<any>('')

    const getUser = async () => {
        await axios.get<userState[]>('https://random-data-api.com/api/v2/users').then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="userCart">

            <h1>{user.email}</h1>
            <img src={user.avatar} />

        </div>
    );
};

export default UserCart;