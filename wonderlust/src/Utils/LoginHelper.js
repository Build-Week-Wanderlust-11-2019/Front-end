import api from "./AxiosAuth";

export async function orgRegister(username, password) {
  let id;
  await api()
    .post("/api/org/register", { org_name: username, password })
    .then(res => {
      console.log("registering org");
      id = res.data.id;
      api()
        .post("/api/org/login", { org_name: username, password })
        .then(res => {
          console.log("logging in org");
          //store token from backend in localStorage
          localStorage.setItem("token", res.data.token);
          //props.props.history.push('/')
        })
        .catch(err => {
          console.log(err + "--in org register>login promise");
        });
    })
    .catch(err => {
      console.log(err + "--in org register promise");
    });

  return id;
}


export async function userRegister(username, password) {
 await api()
   .post("/api/user/register", { username, password })
   .then(res => {
     console.log("registering user");
     
     api()
       .post("/api/user/login", { username, password })
       .then(res => {
         console.log("logging in user");
         //store token from backend in localStorage
         localStorage.setItem("token", res.data.token);
         //props.props.history.push('/')
       })
       .catch(err => {
         console.log(err + "--in user register>login promise");
       });
   })
   .catch(err => {
     console.log(err + "--in user register promise");
   });

}
export async function userLogin(username, password) {
 await api()
 .post("/api/user/login", { username, password })
 .then(res => {
   console.log("logging in user");
   //store token from backend in localStorage
   localStorage.setItem("token", res.data.token);
   //props.props.history.push('/')
 })
 .catch(err => {
   console.log(err + "--in user login promise");
 });

}
export async function orgLogin(username, password) {
 let id;
 await api()
 .post("/api/org/login", { org_name:username, password })
 .then(res => {
  id = res.data.id;
   console.log("logging in org");
   //store token from backend in localStorage
   localStorage.setItem("token", res.data.token);
   //props.props.history.push('/')
 })
 .catch(err => {
   console.log(err + "--in org login promise");
 });
return id
}