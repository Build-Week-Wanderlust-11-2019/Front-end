import { orgRegister, userRegister, orgLogin, userLogin } from "../Utils/LoginHelper";
import api from '../Utils/AxiosAuth'
export const ADDORGID = "ADDORGID"
export const ISORG = "ISORG"
export const USERNAME = "USERNAME"
export const ADDEXPERIENCE = "ADDEXPERIENCE"
export const GETALLEXPS = "GETALLEXPS"
export const LOADING = "LOADING"
export const UPDATEEXPS = 'UPDATEEXPS'
export const ADDUSER = "ADDUSER"
export const SUCCESS = "SUCCESS"
export const ADDINFO = "ADDINFO"


export function addInfo(name,id,isOrg){
 localStorage.setItem("id", id);
 localStorage.setItem("isOrg", isOrg);
 localStorage.setItem("name", name);
 return dispatch => {
  dispatch({type:ADDINFO,payload:
   {
    name: name,
    isOrg: isOrg,
    orgId: id
  }})
 }
}


// export function loginUser(username,password,isOrg){
//  return dispatch => {
//   dispatch({ type: LOADING });
//   if (isOrg) {
//    orgLogin(username, password)
//    .then(res => {
//      dispatch({
//        type: ADDUSER,
//        payload: {
//          name: username,
//          isOrg: isOrg,
//          orgId: res
//        }
//       });
//     localStorage.setItem("id", res);
//     localStorage.setItem("isOrg", isOrg);
//     localStorage.setItem("name", username);
     
//    }).then( () => {
    
//     dispatch({ type: SUCCESS })
//   })
// }
//  else {
//   userLogin(username, password)
//   .then(res => {
//    dispatch({
//     type: ADDUSER,
//     payload: {
//       name: username,
//       isOrg: isOrg,
//       orgId: null
//     }
  
 
//  })
//  localStorage.setItem("id", null);
//  localStorage.setItem("isOrg", isOrg);
//  localStorage.setItem("name", username);
// })
 
//  dispatch({ type: SUCCESS });
// };
// }}
 


export function addExperience(experience){
 return dispatch => {
  
  dispatch({ type:ADDEXPERIENCE, payload: experience})
 }
}

export function getAllExps(experiences){
 return dispatch => {
  dispatch({type: GETALLEXPS, payload: experiences})
 }
}

export function updateExp(experience,id){
 return dispatch => {
  dispatch({type:LOADING})

  api().put(`/api/exp/${id}`, experience)
  .then(res => {      
   console.log(res)
              dispatch({type: UPDATEEXPS, payload:experience})
              
          })
          .catch(err => {
              console.log(err)
          })


 }
}