import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getIndividualUser, updateIndividualUser } from '../Services/service';
import { useNavigate, useParams } from 'react-router-dom';

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

const Update = () => {
    const initval = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }

    useEffect(() => {
        getUpdatedData();
    }, []);

    const getUpdatedData = async () => {
        let response = await getIndividualUser(id);
        setData(response.data);
    }

    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState(initval);
    const onchangeValue = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    const onClickSubmit = async () => {
        await updateIndividualUser(data,id);
        navigate('/read')
    }

    return (
        <>
            <Typography variant="h3">Add User</Typography>
            <Container>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='name' value={data.name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='username' value={data.username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='email' value={data.email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onchangeValue(e)} name='phone' value={data.phone} />
                </FormControl>
                <Click onClick={() => { onClickSubmit() }} variant="contained"> Update </Click>
            </Container>
        </>
    );
};

export default Update;