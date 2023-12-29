import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();

    const [empl, setEmpl] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })

    const { name, username, email, phone } = empl;

    const onInputChange = (e) => {
        setEmpl({ ...empl, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3001/details`,empl).then((res) => {
            alert("record added");
            navigate('/read');
        }).catch((err) => {
            console.log("erro occurs");
        })
    }

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-cener'>
                <div className='col-md-6'>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div class="mb-3 mt-3">
                            <input onChange={(e) => onInputChange(e)} name='name' value={name}
                                placeholder='enter name' type="text" class="form-control"
                                id="" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 mt-3">
                            <input onChange={(e) => onInputChange(e)} name='username' value={username}
                                placeholder='enter user name' type="text" class="form-control"
                                id="" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 mt-3">
                            <input onChange={(e) => onInputChange(e)} name='email' value={email}
                                placeholder='enter email' type="email" class="form-control"
                                id="" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 mt-3">
                            <input onChange={(e) => onInputChange(e)} name='phone' value={phone}
                                placeholder='enter phone' type="number" class="form-control" id="" />
                        </div>
                        <button type="submit" class="btn btn-primary">ADD</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Add;