import {  GET } from '../utils/query'
const x = "WmcLiveSvc/"
export async function getLiveList(param) {
 return GET(x+'getLiveList',param);
}
export async function getLiveAnnounceList(param) {
 return GET(x+'getLiveAnnounceList',param);
}
