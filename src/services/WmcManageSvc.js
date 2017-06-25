import {  GET ,POST} from '../utils/query'
const x = "WmcManageSvc/"
export async function getPosterSpacePage(param) {
 return GET(x+'getPosterSpacePage',param);
}
export async function getPosterSpaceList(param) {
 return GET(x+'getPosterSpaceList',param);
}

export async function getPosterPage(param) {
 return GET(x+'getPosterPage',param);
}
export async function saveOrUpdatePoster(param) {
 return POST(x+'saveOrUpdatePoster',param);
}
export async function deletePoster(param) {
 return POST(x+'deletePoster',param);
}
