import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
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

    const loadCurrentUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/details/${id}`);
            setEmpl(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const onEdit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/details/${id}`, empl).then((res) => {
            alert("record updated");
            navigate('/read');
        }).catch((err) => {
            console.log("erro occurs");
        })
    }

    useEffect(() => {
        loadCurrentUser()
    }, [])

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-cener'>
                <div className='col-md-6'>
                    <form onSubmit={(e) => onEdit(e)}>
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
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Edit;