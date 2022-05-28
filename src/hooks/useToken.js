import { useEffect, useState } from "react";

const useToken = user => {
    const[token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUSer = {email:email};
        if (email){
            fetch(`https://infinite-ridge-15899.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'current-type': 'application/json'
                },
                body:JSON.stringify(currentUSer)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside usetokjen', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user]);
    return [token];
}

export default useToken;