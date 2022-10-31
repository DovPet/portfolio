import { Technology } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchSkills = async () => {

  const data = await fetchData('getSkills')
  const skills: Technology[] = data.skills;

  return skills;
};
