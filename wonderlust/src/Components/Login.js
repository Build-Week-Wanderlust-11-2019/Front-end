import api from "../Utils/AxiosAuth";

import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {  addInfo } from "../Actions/index";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledLog = styled.div`
position: fixed;
top: 50%;
left: 50%
transform: translate(-50%, -50%);
padding: 3rem 4rem 7rem 4rem;
background-image:
    linear-gradient(
      #283E4F,
      #283E4F 65%,
      #3AC080 100%
    );
font-weight: bold;
filter:drop-shadow(5px 8px 5px #3d3d3d);

`;
const StyledForm = styled.form`
margin-top:4rem
`
const Styledinput = styled.input`
border:none;
text-align: left;
 border:none;
 border-bottom: 2px solid white;
 background:transparent;
 color:white;
 font-size:1.1rem;
 padding-left:10px;
`
const StyledLoginTitle = styled.div`
text-align: center
font-size: 30px;
color:white;
`;

const Styledlogreg = styled.div`
  text-align: center;
  margin-top: 3rem;
  color:white;
  display:flex;
  flex-direction:column;
`;
const StyledButtonCont = styled.div`
display:flex;
`
const StyledIMG = styled.div`
filter: 
  brightness(40%) blur(5px);
width: 100%;
height: auto;
position: fixed;
`;
const Styledbutton = styled.button`
width:50%;
margin:1px;
padding:0;
display:inline-block;
background:#4FC57E;
border:none;
font-size:1.2rem;
filter:drop-shadow(4px 4px 4px #3d3d3d);
:hover{
  color:white;
  background:#283E4F;
}

`

const StyledCheckCont = styled.div`
width:50%;
text-align:left
display:flex;
justify-content:space-around;`

function Login(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    organizer: false
  });

  function register() {
    const { username, password } = login;
    if (login.organizer) {
      let id;
      api()
        .post("/api/org/register", { org_name: username, password })
        .then(res => {
          loginUser(username, password)
            .then(res => {
              id = res.id;
              localStorage.setItem("token", res.token);
            })
            .then(res => {
              console.log(res);
              props.history.push("/organizer");
              props.addInfo(username, id, login.organizer);
            });
        })
        .catch(err => {
          console.log(err);
        });
      //register user
    } else {
      api()
        .post("/api/user/register", { username, password })
        .then(res => {
          loginUser(username, password).then(res => {
            console.log(res);
            localStorage.setItem("token", res.token);
            props.addInfo(username, null, login.organizer);
            props.history.push("/user");
          });
        })

        .catch(err => {
          console.log(err.nessage + "--in user register promise");
        });
    }
  }
  function loginClick() {
    if (login.organizer) {
      let id;
      loginUser()
        .then(res => {
          id = res.id;
          localStorage.setItem("token", res.token);
        })
        .then(res => {
          console.log(res);

          props.addInfo(login.username, id, login.organizer);
          props.history.push("/organizer");
        });
    } else {
      let id;
      loginUser()
        .then(res => {
          id = res.id;
          localStorage.setItem("token", res.token);
        })
        .then(res => {
          console.log(res);

          props.addInfo(login.username, id, login.organizer);
          props.history.push("/organizer");
        });
    }
  }
  async function loginUser() {
    const { username, password } = login;
    if (login.organizer) {
      let id;
      let token;
      await api()
        .post("/api/org/login", { org_name: username, password })
        .then(res => {
          id = res.data.id;
          console.log("logging in org");
          token = res.data.token;
          console.log(res.data.token);
        })
        .catch(err => {
          console.log(err.message + "--in org login promise");
        });
      return { id, token };
    } else {
      let id = null;
      let token;
      await api()
        .post("/api/user/login", { username, password })
        .then(res => {
          token = res.data.token;
          console.log(res);
        })

        .catch(err => {
          console.log(err.message + "--in org login promise");
        });
      return { id, token };
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
      <StyledIMG>
        <img src="/Map.jpg" alt="background"/>
      </StyledIMG>
      <StyledLog>
        <StyledLoginTitle>
          Welcome
          <br />
          to
          <br />
          Wanderlust
          <br />
        </StyledLoginTitle>
        <br />
        <StyledForm>
        <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>

          <Styledinput
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
            onChange={handleChange}
          />
          <br />
          <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>

          <Styledinput
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
          />
          <br />
          <Styledlogreg>
            <StyledCheckCont>
              <input
              type="checkbox"
              name="organizer"
              onChange={e =>
                setLogin({ ...login, organizer: !login.organizer })
              }
              checked={login.organizer}
            />
            <p>Organizer?</p>
            </StyledCheckCont>
            <StyledButtonCont>
            <Styledbutton 
              onClick={e => {
                e.preventDefault();
                register();
              }}
            >
              Register
            </Styledbutton>
            <br />
            <br />
            
            <Styledbutton
              onClick={e => {
                e.preventDefault();
                loginClick();
              }}
            >
              Login
            </Styledbutton>
            </StyledButtonCont>
          </Styledlogreg>
        </StyledForm>
      </StyledLog>
    </>
  );
}
function mapStateToProps(state) {
  return {
    loading: state.user.loading,
    isOrg: state.user.isOrg,
    
  };
}
const mapDispatchToProps = {
  
  addInfo: addInfo
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
