import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();

    // const AddUserSection=()=>{
    //     navigate('/add')
    // }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >CRUD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/read' className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <button className='btn btn-secondary btn-outline' onClick={AddUserSection}>Add Users</button> */}
                    <Link className='btn btn-secondary btn-outline' to='/add'>Add Users</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;