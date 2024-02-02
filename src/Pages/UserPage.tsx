import React from 'react';
import {Link, useLocation} from "react-router-dom";

const UserPage = () => {
    const location = useLocation()

    let backBTN = "backBTN"
    let btn = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
    let userPage__info = "userPage__info float-right"
    let userPage__avatar = "userPage__avatar w-2/4 float-left bg-zinc-700"

    if(location.state.width <= 700) {
        backBTN = "backBTN text-center"
        btn = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-5"
        userPage__info = "userPage__info text-center"
        userPage__avatar = "userPage__avatar w-full bg-zinc-700"
    }

    return (
        <div className="userPage w-4/6 mt-10 m-auto">
                <div className={backBTN}>
                    <Link to="/">
                        <button className={btn}>Back</button>
                    </Link>
                </div>
                <div className={userPage__avatar}>
                    <img className="w-full" src={location.state.data.avatar} alt=""/>
                </div>
                <div className={userPage__info}>
                    <p className="userPage__info-id">ID: {location.state.data.id}</p>
                    <p className="userPage__info-email">Email: {location.state.data.email}</p>
                    <p className="userPage__info-username">Username: {location.state.data.username}</p>
                    <p className="userPage__info-pass">password: {location.state.data.password}</p>
                    <p className="userPage__info-firstName">First name: {location.state.data.first_name}</p>
                    <p className="userPage__info-lastName">Last name: {location.state.data.last_name}</p>
                    <p className="userPage__info-gender">Gender: {location.state.data.gender}</p>
                    <p className="userPage__info-dateBirth">Date of birth: {location.state.data.date_of_birth}</p>
                    <p className="userPage__info-phone">Phone number: <a className="text-blue-500 no-underline hover:underline" href={`tel: ${location.state.data.phone_number}`}>{location.state.data.phone_number}</a></p>
                    <p className="userPage__info-social_insurance_number">Social insurance number: {location.state.data.social_insurance_number}</p>
                </div>
        </div>
    );
};

export default UserPage;