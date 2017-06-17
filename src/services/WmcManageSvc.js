import {  GET } from '../utils/query'
const x = "WmcManageSvc/"
export async function getPosterSpacePage(param) {
 return GET(x+'getPosterSpacePage',param);
}
export async function getPosterPage(param) {
 return GET(x+'getPosterPage',param);
}