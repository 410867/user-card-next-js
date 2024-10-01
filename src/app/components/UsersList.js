"use client";

import {useEffect, useState} from "react";
import {Grid2} from "@mui/material";
import axios from "axios";
import CircularIndeterminate from "@/app/components/CircularIndeterminate";
import ErrorMessage from "@/app/components/ErrorMessage";
import UserCard from "@/app/components/UserCard";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularIndeterminate />;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    return (
        <Grid2 container spacing={3} style={{margin: '50px 20px 50px 20px', display:'flex', justifyContent: 'center'}}>
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />
            })}
        </Grid2>
    );
}

export default UsersList;
