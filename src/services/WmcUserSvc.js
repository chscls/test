import {  POST } from '../utils/query'
  const x = "WmcUserSvc/"
export async function login(param) {
 
 return POST(x+'login',param);
  
}