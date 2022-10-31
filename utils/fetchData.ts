
export const fetchData = async (endpoint: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`);
  const data = await res.json();
  return data;
};
