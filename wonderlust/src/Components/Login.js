
import React from "react";
import { useState } from "react";
import {orgRegister,userRegister,orgLogin,userLogin} from "../Utils/LoginHelper";
import { connect } from "react-redux"
import { orgID, isOrg, saveUser} from '../Actions/index'
import {withRouter} from 'react-router-dom'

function Login(props) {

  const [login, setLogin] = useState({
    username: "",
    password: "",
    organizer: false
  });
  
  function register() {  
    const { username, password } = login;
    if (login.organizer) {
      orgRegister(username, password)
      .then(res => { 
       props.orgID(res,username)
       props.isOrg(login.organizer)
       props.history.push('/organizer')


      });
    } else {
      userRegister(username,password)
      props.isOrg(login.organizer)
      props.saveUser(username)
      props.history.push('/user')

    }
  }

  function loginUser() {   
    const { username, password} = login;
    if (login.organizer) { 
     orgLogin(username,password)
     .then(res => {
      props.orgID(res,username)
      props.isOrg(login.organizer)
      props.history.push('/organizer')

      })
    } else {
     userLogin(username,password)
      props.isOrg(login.organizer)
      props.saveUser(username)
      props.history.push('/user')
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
function mapStateToProps(state){
 return {
  data:state
 }
}
const mapDispatchToProps = {
 orgID:orgID,
 isOrg:isOrg,
 saveUser:saveUser
}
export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(Login))

