
export const fetchData = async (endpoint: string, lang: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}?lang=${lang}`);
  const data = await res.json();
  return data;
};
