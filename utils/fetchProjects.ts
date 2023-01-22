import { Project } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchProjects = async (lang: string) => {

  const data = await fetchData('getProjects', lang)
  const projects: Project[] = data.projects;

  return projects;
};
