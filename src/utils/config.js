import axios from "axios"



export const DOMAIN = "https://jsonplaceholder.typicode.com"


export const http = axios.create ({
    baseURL: DOMAIN,
    timeout:30000
});


http.interceptors.request.use((config)=>{
    config.headers = {
       
    };
    // console.log('configheader',config.headers)
    return config;
},errors => {
    return Promise.reject({errors})
})

