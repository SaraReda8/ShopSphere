import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ProtectedRoute (props) {
    let Navigate=useNavigate();

    if(localStorage.getItem('userToken') !== null){
        return props.children }
    else { 
    return<Navigate to={'./login'}/>    

     }

    }


// rcc
