import { Social } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchSocials = async (lang: string) => {

  const data = await fetchData('getSocials', lang)
  const socials: Social[] = data.socials;

  return socials;
};
