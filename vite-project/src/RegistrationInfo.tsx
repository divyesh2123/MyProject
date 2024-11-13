import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { AppDispatch } from './store/store';
import { registrationRequest } from './slice/registrationslice';

export default function RegistrationInfo() {


    const [form, setform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass: ""
    });

    const dis= useDispatch<AppDispatch>();

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSave = (e) => {
        e.preventDefault();
        dis(registrationRequest(form));
    }
    return (
        <form onSubmit={handleSave}>
            <input type='text' name="firstname" onChange={handleChange} />
            <input type='text' name="lastname" onChange={handleChange} />
            <input type='text' name="email" onChange={handleChange} />
            <input type='text' name="password" onChange={handleChange} />
            <input type='text' name="confirmpass" onChange={handleChange} />
            <input type='submit' value="save" />
        </form>
    )
}
