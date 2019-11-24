import { DELETE, ERROR, ADDORGID, ISORG,ADDINFO,SUCCESS,ADDUSER, ADDEXPERIENCE, GETALLEXPS, UPDATEEXPS,LOADING} from "../Actions/index"

const initialState = {
 error:'',
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
 
   case ADDINFO:{
    console.log(action.payload)
    return{
     ...state,
     user: {...state.user,
      name:action.payload.name,
      orgId:action.payload.orgId,
      isOrg:action.payload.isOrg
      }
    }
   }
   case DELETE:{
    return {
     
    }
   }
   case ERROR: {
     console.log(action.payload.message)
    return {
     ...state,
     error:action.payload,
     loading:false
    }
   }
   case LOADING: {
    return {
     ...state,
     loading:true
    }
   }
   case SUCCESS: {
    return {
     ...state,
     loading:false,
     error:null
    }
   }
   case ADDUSER:{
    
    return{
     ...state,
     user: {...state.user,
     name:action.payload.org_name,
     orgId:action.payload.id,
     isOrg:action.payload.isOrg
     }
    }
   }
   case ADDORGID: {
    return {
     ...state,     
     user:{ ...state.user,
     orgId: action.payload.id,
     name: action.payload.org_name,
     isOrg:action.payload.isOrg
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