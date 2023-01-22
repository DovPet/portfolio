import { Experience } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchExperience = async (lang: string) => {
  const data = await fetchData("getExperience", lang);
  const experiences: Experience[] = data.experiences;

  return experiences;
};
