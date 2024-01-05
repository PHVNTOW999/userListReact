import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link, Route, Router, Routes} from "react-router-dom";
import UserPage from "../Pages/UserPage";

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
        credit_card: {
            cc_number: String
        }
    }

    const api = 'https://random-data-api.com/api/v2/users'

    const [user, setUser] = useState<Iuser>()

    useEffect(() => {
        async function getUser() {
            await axios.get(api).then(data => {
                setUser(data.data)
            })
        }

        getUser()
    }, [])

    return (
        <div className="userCart">
            {
                user ?
                    <Link to={`/user/${user.uid}`} state={{ data: user}}>
                        <div className="userCart__wrap bg-zinc-700 text-white cursor-pointer border border-black">
                            <div className="userCart__ava w-32 mr-auto ml-auto">
                                <img src={`${user.avatar}`} alt=""/>
                            </div>
                            <div className="userCart__fullname text-center">
                                <div className="userCart__fullname-first ">{user.first_name}</div>
                                <div className="userCart__fullname-last">{user.last_name}</div>
                            </div>
                        </div>
                    </Link>
                    :
                    <div
                        className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
            }
        </div>
    );
};

export default UserCart;