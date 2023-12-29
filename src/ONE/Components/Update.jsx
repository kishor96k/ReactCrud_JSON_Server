import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setId(Number(localStorage.getItem('id')));
        setName(localStorage.getItem('name') || '');
        setEmail(localStorage.getItem('email') || '');
    }, []);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `https://658e36162871a9866e78ea36.mockapi.io/crdu-reactjs/${id}`,
                { name, email }
            );
            navigate('/read');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div>
            <h2>Update Form</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp"
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleEdit}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
