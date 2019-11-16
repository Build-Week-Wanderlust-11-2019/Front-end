export const ADDORGID = "ADDORGID"

export function saveID(id){
 return dispatch => {
  console.log(id)
  dispatch({ type:ADDORGID, payload: id})
 }
}