import React from 'react';

interface IUsers {
    name: string;
    email: string;
}

interface Props {
    user: IUsers;
}

function User({ user }: Props) {
    return (
        <div>
            <strong>Nome: </strong> {user.name} <br /><br />
            <strong>E-mail: </strong> {user.email} <br />
        </div>
    );
}

export default User;