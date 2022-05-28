import React, { useEffect, useState } from 'react';

const MyProfile = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch(`https://infinite-ridge-15899.herokuapp.com/user`)
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [users])
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center'>
                <p>{users.email}</p>
            </div>
        </div>
            
    );
};

export default MyProfile;