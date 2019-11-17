import { ADDORGID, ISORG, USERNAME, ADDEXPERIENCE } from "../Actions/index"

const initialState = {
 experiences:[],
 user:{
  name:"",
  isOrg: false,
  orgId:null,
 }
}

export function reducer(state = initialState, action) {
 switch (action.type) {
 

   case USERNAME:{
    
    return{
     ...state,
     user: {...state.user,
     name:action.payload,
     orgId:null
     }
    }
   }
   case ADDORGID: {
    console.log(action.payload)
    return {
     ...state,     
     user:{ ...state.user,
     orgId: action.payload.id,
     name: action.payload.org_name
     }
    }
   }

   case ISORG: {
    return {
    ...state,
     user: {...state.user,
      isOrg: action.payload
     }
    }
   }

   case ADDEXPERIENCE: {
    console.log(action.payload)
    return {
     ...state,
     experiences: action.payload
     
    }
   }
   default:
     return {
       state
     };
 }
}