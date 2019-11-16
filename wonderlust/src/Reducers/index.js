import { ADDORGID, ISORG, USERNAME } from "../Actions/index"

const initialState = {
 experiences:[],
 name:"",
 isOrg: false,
 orgId:null,
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
 

   case USERNAME:{
    return{
     ...state,
     name:action.payload,
     orgId:null
    }
   }
   case ADDORGID: {
    console.log(action.payload)
    return {
     ...state,
     orgId: action.payload.id,
     name: action.payload.org_name

    }
   }

   case ISORG: {
    return {
     ...state,
     isOrg: action.payload
    }
   }
   default:
     return {
       state
     };
 }
}