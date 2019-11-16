export const ADDORGID = "ADDORGID"
export const ISORG = "ISORG"
export const USERNAME = "USERNAME"


export function orgID(id,org_name){
 return dispatch => {
  dispatch({ type:ADDORGID, payload: {
   id:id,
   org_name:org_name
  }
  })
 }
}

export function isOrg(organizer){
 return dispatch => {
  
  dispatch({ type:ISORG, payload: organizer})
 }
}
export function saveUser(username){
 return dispatch => {
  
  dispatch({ type:USERNAME, payload: username})
 }
}