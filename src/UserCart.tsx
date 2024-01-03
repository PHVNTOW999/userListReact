import React, {useEffect, useState} from 'react';
import axios from 'axios'

const UserCart = () => {

    type Iuser = {
        avatar: String
        date_of_birth: String
        email: String
        first_name: String
        gender: String
        id: Number
        last_name: String
        password: String
        phone_number: String
        social_insurance_number: String
        uid: String
        username: String
        subscription: {
            payment_method: String
            plan: String
            status: String
            term: String
        }
        employment: {
            key_skill: String
            title: String
        }
        address: {
            city: String
            coordinates: {
                lat: Number
                lng: Number
            }
            country: String
            state: String
            street_address: String
            street_name: String
            zip_code: String
        }
        credit_card : {
            cc_number: String
        }
    }

    const api = 'https://random-data-api.com/api/v2/users'

    const [user, setUser] = useState<Iuser>()

    useEffect(() => {
        async function getUser() {
            await axios.get(api).then(data => {
                console.log(data.data)
                setUser(data.data)
            })
        }

        getUser()
    }, [])

    return (

        <div className="userCart">
            {
                user ?
                    <div className="userCart__wrap">
                        <div className="userCart__ava">
                            <img src={`${user.avatar}`} alt=""/>
                        </div>
                        <div className="userCart__fullname">
                            <div className="userCart__fullname-first">{ user.first_name }</div>
                            <div className="userCart__fullname-last">{ user.last_name }</div>
                        </div>
                    </div>
                    : null
            }
        </div>

    );
};

export default UserCart;