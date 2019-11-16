import React from "react";
import { useState } from "react";
import {orgRegister,userRegister,orgLogin,userLogin} from "../Utils/LoginHelper";
import { connect } from "react-redux"
import { saveID } from '../Actions/index'

function Login(props) {

  const [login, setLogin] = useState({
    username: "",
    password: "",
    organizer: false
  });
  const [id, setId] = useState();


  function register() {  
    const { username, password } = login;
    if (login.organizer) {
      orgRegister(username, password).then(res => setId(res));
      saveID(id)
    } else {
      userRegister(username,password)
    }
  }

  function loginUser() {   
    const { username, password} = login;
    if (login.organizer) {
     orgLogin(username,password).then(res => setId(res))
    } else {
     userLogin(username,password)
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: value
    });
  }
 
  return (
    <div>
      <form >
        <input
          type="text"
          name="username"
          placeholder="username"
          value={login.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="organizer"
          onChange={e => setLogin({ ...login, organizer: !login.organizer })}
          checked={login.organizer}
        />
        Organizer?
        <br />
        <button onClick={(e) => { e.preventDefault(); register()}}>Register</button>
        <button onClick={(e) => { e.preventDefault(); loginUser()}}>Login</button>
      </form>
      
    </div>
  );
}
const mapDispatchToProps = {
 saveID:saveID
}
export default connect(
 {},
 mapDispatchToProps
)(Login);
