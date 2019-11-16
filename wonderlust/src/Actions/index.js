export const ADDORGID = "ADDORGID"

export function saveID(id){
 return dispatch => {
  dispatch({ type:ADDORGID, payload: id})
 }
}