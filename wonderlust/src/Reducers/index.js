import { ADDORGID, ISORG, USERNAME, ADDEXPERIENCE, GETALLEXPS, UPDATEEXPS,LOADING} from "../Actions/index"

const initialState = {
 loading:false,
 allExperiences:[],
 experiences:[],
 user:{
  name:"",
  isOrg: false,
  orgId:null,
 }
}

export function reducer(state = initialState, action) {
 switch (action.type) {
 


   case LOADING: {
    return {
     ...state,
     loading:true
    }
   }
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
    return {
     ...state,
     experiences: action.payload
     
    }
   }

   case GETALLEXPS: {
    return {
     ...state,
     allExperiences: action.payload
     
    }
   }
   case UPDATEEXPS:{
    const newArr = state.experiences.filter((exp) => exp.id !== action.payload.id)
    return {
     ...state,
     loading:false,
     experiences: newArr.concat(action.payload)
    }
   }
  
   default:
     return {
       state
     };
 }
}