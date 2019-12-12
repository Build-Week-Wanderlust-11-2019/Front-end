import api from "../Utils/AxiosAuth";
import loginBackground from "../Assets/balloon2.webp";
import React from "react";
import LoadingSpinner from "../Components/Spinner/LoadingSpinner";
import Error from "./Error/Error";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addInfo, loading, success, error } from "../Actions/index";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledLog = styled.div`
margin-top:25rem;
margin-bottom:100px;
position: absolute;
top: 10%;
left: 50%;
transform: translate(-50%, -50%);
padding: 3rem 4rem 7rem 4rem;
background-image:
    linear-gradient(
      #283E4F,
      #283E4F 65%,
      rgb(109, 190, 151) 100%
    );
font-weight: bold;
filter:drop-shadow(5px 8px 5px #3d3d3d);
z-index:2;

`;
const StyledForm = styled.form`
  margin-top: 4rem;
`;
const StyledI = styled.div`
  margin: 5px;
`;
const Styledinput = styled.input`
  border: none;
  text-align: left;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  padding-left: 10px;
  z-index: 2;
  :focus {
    outline: none;
    background: transparent;
  }
`;
const StyledLoginTitle = styled.div`
text-align: center;
font-size: 30px;
color:white;
`;

const Styledlogreg = styled.div`
  text-align: center;
  margin-top: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
`;
const StyledButtonCont = styled.div`
  display: flex;
`;
const StyledIMG = styled.div`
  width: 110%;
  min-height: 100vh;
  position: fixed;

  background-image: url(${loginBackground});
  background-position: center;
  background-repeat: no-repeat;
  margin: -1rem -10px -2rem -5px;
  overflow-y: auto;
  z-index: 0;
`;
const Styledbutton = styled.button`
  width: 50%;
  margin: 1px;
  padding: 0;
  color:!important black;
  display: inline-block;
  background: #04ae76;
  border: none;
  font-size: 1.2rem;
  filter: drop-shadow(4px 4px 4px #3f3f3f);
  :hover {
    color: white;
    background: #283e4f;
  }
`;
const StyledCheckCont = styled.div`
width:50%;
text-align:left;
display:flex;
justify-content:space-around;`

//Login Component
function Login(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    organizer: false
  });

  useEffect(() => {
    //props.success()
    
  }, []);

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
              
              props.history.push("/organizer");
              props.addInfo(username, id, login.organizer);
            });
        })
        .catch(err => {
          props.error(err);
        });
      //register user
    } else {
      api()
        .post("/api/user/register", { username, password })
        .then(res => {
          loginUser(username, password).then(res => {
            localStorage.setItem("token", res.token);
            props.addInfo(username, null, login.organizer);
            props.history.push("/user");
          });
        })

        .catch(err => {
          props.error(err);
        });
    }
    
  }
  function loginClick() {
    
    if (login.organizer) {
      let id;
      loginUser()
        .then(res => {
          if (res.token) {
            id = res.id;
            localStorage.setItem("token", res.token);
          }
        })
        .catch(err => {
          props.error(err);
        })
        .then(res => {
          if (localStorage.getItem("token"))
          props.success() 
          props.addInfo(login.username, id, login.organizer);
          props.history.push("/organizer");
        });
    } else {
      let id;
      loginUser()
        .then(res => {
          id = res.id;
          if (res.token) {
            localStorage.setItem("token", res.token);
          }
        })
        .catch(err => {
          props.error(err);
        })
        .then(res => {
          if (localStorage.getItem("token")) {
            props.success()
            props.addInfo(login.username, id, login.organizer);
            props.history.push("/user");
          }
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
          token = res.data.token;
        })
        .catch(err => {
          props.error(err);
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
          props.error(err);
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
        <div></div>
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
          <StyledI>
            
            <i className="fa fa-user-o fa-lg" aria-hidden="true"></i>
          </StyledI>

          <Styledinput
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
            onChange={handleChange}
          />
          <br />
          <StyledI>
            <i className="fa fa-unlock fa-lg" aria-hidden="true"></i>
          </StyledI>

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
                  props.loading();
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
                  props.loading();
                }}
              >
                Login
              </Styledbutton>
            </StyledButtonCont>
          </Styledlogreg>
        </StyledForm>
        {props.isLoading && <LoadingSpinner />}
        {props.errorMess &&  <Error error={props.errorMess.response.data.message} />}
      </StyledLog>
    </>
  );
}
function mapStateToProps(state) {
  return {
    isLoading: state.user.loading,
    isOrg: state.user.isOrg,
    errorMess: state.user.error
  };
}
const mapDispatchToProps = {
  addInfo: addInfo,
  success: success,
  loading: loading,
  error: error
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
