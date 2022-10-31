import { PageInfo } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchPageInfo = async () => {
  
  const data = await fetchData('getPageInfo')
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
