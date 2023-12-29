import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const header = { 'Access-Control-Allow-Origin': '*' }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://658e36162871a9866e78ea36.mockapi.io/crdu-reactjs',
            { name: name, email: email },
            header
        ).then(() => {
            navigate('/read')
        })

    }

    return (
        <div>
            <>
                <h2>Create Form</h2>
                <form>
                    <div className="mb-3">
                        <label for="" className="form-label">Name</label>
                        <input type="name" className="form-control" id="" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="" onChange={(e) => { setEmail(e.target.value) }} aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </>
        </div>
    );
};

export default Create;