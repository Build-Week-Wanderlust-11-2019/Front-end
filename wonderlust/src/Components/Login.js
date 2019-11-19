
import React from "react";
import { useState } from "react";
import { orgRegister, userRegister, orgLogin, userLogin } from "../Utils/LoginHelper";
import { connect } from "react-redux"
import { orgID, isOrg, saveUser } from '../Actions/index'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';


const StyledLog = styled.div`
position: fixed;
top: 50%;
left: 50%
transform: translate(-50%, -50%);
border: 3px solid black;
padding: 7rem 4rem 7rem 4rem;
//background-image: url("/map.jpg")
font-weight: bold;
`

const StyledLoginTitle = styled.div`
text-align: center
font-size: 30px;
`

const Styledlogreg = styled.div`
text-align: center;
margin-top: 1rem
`

const StyledIMG = styled.div`
opacity: 0.2;
filter: alpha(opacity=50);
width: 100%;
height: auto;
position: fixed;
`




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
                    props.orgID(res, username)
                    props.isOrg(login.organizer)
                    localStorage.setItem("id", res);
                    localStorage.setItem("isOrg", login.organizer);
                    localStorage.setItem("name", username)
                    props.history.push('/organizer')


                });
        } else {
            userRegister(username, password)
            props.isOrg(login.organizer)
            props.saveUser(username)
            props.history.push('/user')

        }
    }

    function loginUser() {
        const { username, password } = login;
        if (login.organizer) {
            orgLogin(username, password)
                .then(res => {
                    props.orgID(res, username)
                    props.isOrg(login.organizer)
                    localStorage.setItem("id", res);
                    localStorage.setItem("isOrg", login.organizer);
                    localStorage.setItem("name", username)
                    props.history.push('/organizer')

                })
        } else {
            userLogin(username, password)
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
        <>
        <StyledIMG><img src="/Map.jpg" /></StyledIMG>
        <StyledLog>
            <StyledLoginTitle>Welcome<br />
                to<br />
                Wanderlust<br />
        </StyledLoginTitle><br />
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
                <Styledlogreg>
                <input
                    type="checkbox"
                    name="organizer"
                    onChange={e => setLogin({ ...login, organizer: !login.organizer })}
                    checked={login.organizer}
                />
                Organizer?
        <br /><br/>
                <button onClick={(e) => { e.preventDefault(); register() }}>Register</button><br/><br/>
                <button onClick={(e) => { e.preventDefault(); loginUser() }}>Login</button>
                </Styledlogreg>
            </form>

        </StyledLog>
        </>
    );
}
function mapStateToProps(state) {
    return {
        data: state
    }
}
const mapDispatchToProps = {
    orgID: orgID,
    isOrg: isOrg,
    saveUser: saveUser,
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))

