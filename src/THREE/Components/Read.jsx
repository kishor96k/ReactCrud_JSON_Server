import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Read = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        await axios.get(`http://localhost:3001/details`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/details/${id}`).then((res) => {
            alert("record deleted");
            loadUser();
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>

            <table className="table mt-4">
                <thead>
                    <tr className="bg-dark text-white">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, ind) => (
                        <tr>
                            <th scope="row">{ind + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                            <td>
                                <Link className='btn btn-info me-2' to={`/edit/${val.id}`}><i className="fas fa-pencil"></i></Link>
                                <Link className='btn btn-danger' onClick={() => { deleteUser(val.id) }}><i className="fas fa-trash"></i></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    );
};

export default Read;