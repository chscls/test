import {  GET } from '../utils/query'
const x = "WmcSiteSvc/"
export async function getPosterList(param) {
 return GET(x+'getPosterList',param);
}
export async function getRandOrgList(param) {
 return GET(x+'getRandOrgList',param);
}
export async function getCatalogGroupList(param) {
 return GET(x+'getCatalogGroupList',param);
}
export async function getSite(param) {
 return GET(x+'getSite',param);
}