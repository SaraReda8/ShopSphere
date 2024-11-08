import React, { useEffect } from 'react';
import Style from './UserProfile.module.css';
import { jwtDecode } from 'jwt-decode';
export default function UserProfile () {

 useEffect (()=>{
    let encodedToken=localStorage.getItem('userToken') ;
    let decodedToken= jwtDecode(encodedToken ) ;    
 })


    return <>
   <h1>Hello:</h1>
    </>
}

 