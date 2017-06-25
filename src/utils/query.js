import request from '../utils/request';
import qs ,{ parse } from 'qs';
import FormdataWrapper from 'object-to-formdata';
import merge from 'merge-object';
import {rapHost, onlinePath,rapFlag, onlineImagePath,rapImagePath} from '../config/config'
import fetch from 'dva/fetch';
const cookieTrue = {
  credentials: 'include'
};
const jsonConf = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function getUrl(smarturl,flag) {
  if(flag){
    return rapHost + '/' + smarturl;
  }else{
    return onlinePath + smarturl;
  }
}
function getImgUrl(smarturl) {
  if(smarturl==null){
    return '';
  }
  if(rapFlag){
    return rapImagePath  + smarturl;
  }else{
    return onlinePath + smarturl;
  }
}

async function POST(url,params,isJson){
  if(isJson == undefined){isJson = false};
  return request( getUrl(url,rapFlag),merge({
    method: 'POST',
    body:isJson?JSON.stringify(params):FormdataWrapper(params),
  },isJson?merge(jsonConf,cookieTrue):cookieTrue),rapFlag);
}

async function GET(url,params){
  return request( getUrl(url,rapFlag) + `?${qs.stringify(params)}`,merge({
    method: 'GET',mode:'cors',credentials: 'omit',
  },cookieTrue));
}



export {
  POST,GET,getImgUrl
}
