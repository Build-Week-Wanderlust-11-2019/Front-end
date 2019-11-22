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
border: 3px solid black;
padding: 7rem 4rem 7rem 4rem;
//background-image: url("/map.jpg")
font-weight: bold;
`;

const StyledLoginTitle = styled.div`
text-align: center
font-size: 30px;
`;

const Styledlogreg = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const StyledIMG = styled.div`
  opacity: 0.2;
  filter: alpha(opacity=50);
  width: 100%;
  height: auto;
  position: fixed;
`;

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
        <img src="/Map.jpg" />
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
        <form>
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
              onChange={e =>
                setLogin({ ...login, organizer: !login.organizer })
              }
              checked={login.organizer}
            />
            Organizer?
            <br />
            <br />
            <button
              onClick={e => {
                e.preventDefault();
                register();
              }}
            >
              Register
            </button>
            <br />
            <br />
            <button
              onClick={e => {
                e.preventDefault();
                loginClick();
              }}
            >
              Login
            </button>
          </Styledlogreg>
        </form>
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
