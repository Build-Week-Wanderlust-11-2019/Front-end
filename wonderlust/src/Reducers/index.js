import { ADDORGID } from "../Actions/index"
const initialState = {
 experiences:[],
 orgId:null,
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
 


   case ADDORGID: {
    console.log(action.payload)
    return {
     ...state,
     orgId: action.payload
    }
   }
   default:
     return {
       state
     };
 }
}