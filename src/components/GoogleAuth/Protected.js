import React from 'react'
import { UserAuth } from './Context/AuthContext';
import {Navigate} from 'react-router-dom';
const Protected = ({children}) => {
        const {user}=UserAuth();
        console.log(user)
        if(!user)
           return <Navigate to="/signin" />
        
        return children || null;
}

export default Protected;