import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://infinite-ridge-15899.herokuapp.com/user').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>There are  {users.length} Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Adress</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;