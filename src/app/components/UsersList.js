"use client";

import {Component} from "react";
import {Grid2} from "@mui/material";
import axios from "axios";
import CircularIndeterminate from "@/app/components/CircularIndeterminate";
import ErrorMessage from "@/app/components/ErrorMessage";
import UserCard from "@/app/components/UserCard";

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ users: response.data, loading: false });
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {
        const { users, loading, error } = this.state;

        if (loading) {
            return <CircularIndeterminate />;
        }

        if (error) {
            return <ErrorMessage error={error} />;
        }

        return (
            <Grid2 container spacing={3} style={{margin: '50px 20px 50px 20px',display:'flex', justifyContent: 'center'}}>
                {users.map((user) => {
                    return <UserCard key={user.id} user={user} />
                })}
            </Grid2>
        );
    }
}

export default UsersList;
