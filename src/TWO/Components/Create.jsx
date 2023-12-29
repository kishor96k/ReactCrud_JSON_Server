import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { addUser } from '../Services/service';
import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px;
}
`
const Click = styled(Button)`
margin:20px 0px
`

const Create = () => {
    const initval = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }

    const navigate=useNavigate();

    const [data, setData] = useState(initval);
    const onchangeValue = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onClickSubmit = async () => {
        await addUser(data);
        navigate('/read')
    }

    return (
        <>
            <Typography variant="h3">Add User</Typography>
            <Container>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='name' />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='username' />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='email' />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='phone' />
                </FormControl>
                <Click onClick={() => { onClickSubmit() }} variant="contained"> Add </Click>
            </Container>
        </>
    );
};

export default Create;