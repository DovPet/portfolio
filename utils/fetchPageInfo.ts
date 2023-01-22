import { PageInfo } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchPageInfo = async (lang: string) => {
  
  const data = await fetchData('getPageInfo', lang)
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
