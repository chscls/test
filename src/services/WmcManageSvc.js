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


export async function getTopicPage(param) {
 return GET(x+'getTopicPage',param);
}
export async function saveOrUpdateTopic(param) {
 return POST(x+'saveOrUpdateTopic',param);
}
export async function deleteTopic(param) {
 return POST(x+'deleteTopic',param);
}



export async function getCatalogPage(param) {
 return GET(x+'getCatalogPage',param);
}
export async function saveOrUpdateCatalog(param) {
 return POST(x+'saveOrUpdateCatalog',param);
}
export async function deleteCatalog(param) {
 return POST(x+'deleteCatalog',param);
}



export async function getOrderPage(param) {
 return GET(x+'getOrderPage',param);
}
export async function saveOrUpdateOrder(param) {
 return POST(x+'saveOrUpdateOrder',param);
}
export async function deleteOrder(param) {
 return POST(x+'deleteOrder',param);
}


export async function getLivePage(param) {
 return GET(x+'getLivePage',param);
}
export async function saveOrUpdateLive(param) {
 return POST(x+'saveOrUpdateLive',param);
}
export async function deleteLive(param) {
 return POST(x+'deleteLive',param);
}



export async function getLiveAnnouncePage(param) {
 return GET(x+'getLiveAnnouncePage',param);
}
export async function saveOrUpdateLiveAnnounce(param) {
 return POST(x+'saveOrUpdateLiveAnnounce',param);
}
export async function deleteLiveAnnounce(param) {
 return POST(x+'deleteLiveAnnounce',param);
}