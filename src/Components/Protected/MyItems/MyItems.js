import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyItems = () => {
    const [items,setItems]=useState([]);
    const[user]=useAuthState(auth);
    useEffect( ()=>{
        const getitems=async()=>{
            const email=user.email;
            const url =`http://localhost:5000/items?email=${email}`;
            const{data}=await axios.get(url);
            setItems(data);
    }
    getitems();
    },[user])

    return (
        <div>
            <h2>{items.length}</h2>
        </div>
    );
};

export default MyItems;