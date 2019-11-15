import { useState } from 'react';
import React from 'react';




export default function Login(){
    const[username, setUserName] = useState("");
    const[password, setPassWord] = useState("");
    const[checkbox, setCheckBox] = useState("");
}


function validationInput(){
    return username.length > 0 && password.length > 0;
}

function handleSubmit(event){
    event.preventDefault();
}

