import axios from 'axios'

export function getAuthToken() {
 return localStorage.getItem("token")
}

export default function() {
 return axios.create({
  baseURL:"https://wanderlust-ty.herokuapp.com",
  headers: {
   Authorization: getAuthToken(),

  },
 })
}