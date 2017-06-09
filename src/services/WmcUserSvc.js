import {  POST } from '../utils/query'
export async function login(param) {
const x = "WmcUserSvc/"
 return POST(x+'login',param);
  
}