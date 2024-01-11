import React from 'react';
import {useLocation} from "react-router-dom";

const UserPage = () => {
    const location = useLocation()

    return (
        <div className="userPage w-4/6 m-auto">
            <section className="mt-10">
                <div className="userPage__avatar w-2/4 float-left bg-zinc-700">
                    <img className="w-full" src={location.state.data.avatar} alt=""/>
                </div>
                <div className="userPage__info float-right">
                    <p className="userPage__info-id">ID: {location.state.data.id}</p>
                    <p className="userPage__info-email">Email: {location.state.data.email}</p>
                    <p className="userPage__info-username">Username: {location.state.data.username}</p>
                    <p className="userPage__info-pass">password: {location.state.data.password}</p>
                    <p className="userPage__info-firstName">First name: {location.state.data.first_name}</p>
                    <p className="userPage__info-lastName">Last name: {location.state.data.last_name}</p>
                    <p className="userPage__info-gender">Gender: {location.state.data.gender}</p>
                    <p className="userPage__info-dateBirth">Date of birth: {location.state.data.date_of_birth}</p>
                    <p className="userPage__info-phone">Phone number: {location.state.data.phone_number}</p>
                    <p className="userPage__info-social_insurance_number">Social insurance number: {location.state.data.social_insurance_number}</p>
                </div>
            </section>
        </div>
    );
};

export default UserPage;