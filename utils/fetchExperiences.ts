import { Experience } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchExperience = async () => {

  const data = await fetchData('getExperience')
  const experiences: Experience[] = data.experiences;

  return experiences;
};
