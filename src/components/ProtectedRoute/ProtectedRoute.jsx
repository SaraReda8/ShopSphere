import React from 'react';
import Style from './ProtectedRoute.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
export default function ProtectedRoute (props) {
    let navigate=useNavigate();

    if(localStorage.getItem('userToken') !== null){
        return props.children }
    else { 
    return<Navigate to={'./login'}/>    

     }

    }


// rcc
