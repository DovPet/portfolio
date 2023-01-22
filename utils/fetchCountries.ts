import { Country } from "./../typings.d";
import { fetchData } from "./fetchData";

export const fetchCountries = async (lang: string) => {

  const data = await fetchData('getCountries', lang)
  const countries: Country[] = data.countries;

  return countries;
};
