import request from '../utils/request';
import { GET } from '../utils/query'
export async function query(param) {

 return GET('member/list',param);
  
}


