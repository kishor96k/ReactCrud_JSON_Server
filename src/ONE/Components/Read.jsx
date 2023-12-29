import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Read = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]); // Initialize as an empty array

    const getDetails = () => {
        axios.get(`https://658e36162871a9866e78ea36.mockapi.io/crdu-reactjs`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`https://658e36162871a9866e78ea36.mockapi.io/crdu-reactjs/${id}`).then((rep) => {
            alert("record deleted");
            getDetails();
        }).catch((err) => {
            alert("err occurs")
        })
    }
    useEffect(() => {
        getDetails();
    }, []);

    const setLocal = (id, name, email) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
    }

    const back = () => {
        navigate('/');
    };

    return (
        <div>
            <h4 className='ml-auto'>
                <button className='btn btn-info' onClick={back}>
                    Home
                </button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((values, index) => (
                        <tr key={index}>
                            <th>{values.id}</th>
                            <td>{values.name}</td>
                            <td>{values.email}</td>
                            <td>
                                <Link to='/update' >
                                    <button className='btn btn-sm btn-success'
                                        onClick={setLocal(
                                            values.id,
                                            values.name,
                                            values.email
                                        )}
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </td>
                            {/* <td>
                                <Link to={`/update/${values.id}`} >
                                    <button className='btn btn-sm btn-success'>Edit</button>
                                </Link>
                            </td> */}
                            <td>
                                <button className='btn btn-sm btn-danger' onClick={() => { handleDelete(values.id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
