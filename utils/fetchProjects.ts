import { Project } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchProjects = async () => {

  const data = await fetchData('getProjects')
  const projects: Project[] = data.projects;

  return projects;
};
