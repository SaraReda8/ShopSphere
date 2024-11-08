import { React, useEffect, useState } from 'react';

export default function useNetwork(){
    let [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        detectIsOnline();
    },[]);
    function detectIsOnline(){
        window.addEventListener('online',function(){
        setIsOnline(true);
    })
    window.addEventListener('offline',function(){
        setIsOnline(false);
    })
    }

  

    return<>
    {isOnline?<div className="network">You are online</div>:<div className="network">You are offline</div>}
    </>
 }