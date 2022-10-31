import { Social } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchSocials = async () => {

  const data = await fetchData('getSocials')
  const socials: Social[] = data.socials;

  return socials;
};
