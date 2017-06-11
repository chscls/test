import {  GET } from '../utils/query'
const x = "WmcSiteSvc/"
export async function getPosterList(param) {
 return GET(x+'getPosterList',param);
}
export async function getRandOrgList(param) {
 return GET(x+'getRandOrgList',param);
}