import { useEffect, useState } from "react";

const useToken = user => {
    const[token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUSer = {email:email};
        if (email){
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'current-type': 'application/json'
                },
                body:JSON.stringify(currentUSer)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside usetokjen', data);
            })
        }
    },[user]);
    return [token];
}

export default useToken;