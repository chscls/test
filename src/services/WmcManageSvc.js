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


export async function getAppPage(param) {
 return GET(x+'getAppPage',param);
}
export async function saveOrUpdateApp(param) {
 return POST(x+'saveOrUpdateApp',param);
}
export async function deleteApp(param) {
 return POST(x+'deleteApp',param);
}


export async function getCatalogGroupPage(param) {
 return GET(x+'getCatalogGroupPage',param);
}
export async function saveOrUpdateCatalogGroup(param) {
 return POST(x+'saveOrUpdateCatalogGroup',param);
}
export async function deleteCatalogGroup(param) {
 return POST(x+'deleteCatalogGroup',param);
}


export async function getCoursePage(param) {
 return GET(x+'getCoursePage',param);
}
export async function saveOrUpdateCourse(param) {
 return POST(x+'saveOrUpdateCourse',param);
}
export async function deleteCourse(param) {
 return POST(x+'deleteCourse',param);
}