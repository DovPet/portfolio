import { Technology } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchSkills = async (lang: string) => {

  const data = await fetchData('getSkills', lang)
  const skills: Technology[] = data.skills;

  return skills;
};
