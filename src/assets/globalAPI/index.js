import axios from "axios";
//var axios = require('axios');
var FormData = require("form-data");  
// var api_url = "http://localhost:3005/api/mobile/";
// var api_url = "https://app-backend-dscp.onrender.com/api/mobile/";
// axios.defaults.baseURL = "http://localhost:3005/api/mobile/";
axios.defaults.baseURL = "https://app-backend-dscp.onrender.com/api/mobile/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export function login(data) {
  return axios.post("login", data);
}
export function usercreate(data) {
  return axios.post("signup", data);
}
export function addAccount(data) { 
  let token = localStorage.getItem("token"); 
  console.log("bhbjhbb",token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
  axios.defaults.headers.post["Content-Type"] = "application/json"; 
  return axios.post("admin/AddAccount",data); 
;}
export function transfar(data) { 
  let token = localStorage.getItem("token"); 
  console.log("bhbjhbb",token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
  axios.defaults.headers.post["Content-Type"] = "application/json"; 
  return axios.post("/user/transaction",data); 
;}
export function banner(data) { 
  let token = localStorage.getItem("token"); 
  console.log("bhbjhbb",token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
  axios.defaults.headers.post["Content-Type"] = "multipart/form-data"; 
  return axios.post("/admin/upload/banner",data); 
;}
export function appLogo(data) { 
  let token = localStorage.getItem("token"); 
  console.log("bhbjhbb",token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
  axios.defaults.headers.post["Content-Type"] = "multipart/form-data"; 
  return axios.post("/admin/upload/logo",data); 
;}

export function authDivision(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

