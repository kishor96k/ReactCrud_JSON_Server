import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, Button, TableHead, TableRow } from '@mui/material';
import { getUsers ,deleteIndividualUser} from '../Services/service';
import { Link } from 'react-router-dom';
const Read = () => {
    const [users, setUsers] = useState([]);

    const getDetails = async () => {
        try {
            let response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const deleteUser = async (id)=>{
        await deleteIndividualUser(id);
        alert("record deleted");
        getDetails();
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((values, index) => (
                        <TableRow key={index}>
                            <TableCell>{values.id}</TableCell>
                            <TableCell>{values.name}</TableCell>
                            <TableCell>{values.username}</TableCell>
                            <TableCell>{values.email}</TableCell>
                            <TableCell>{values.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="info" style={{ marginRight: '10px' }}
                                    component={Link} to={`/update/${values.id}`}>
                                    Edit
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="error" onClick={()=>deleteUser(values.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody >
            </Table >
        </>
    );
};

export default Read;
