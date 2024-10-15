export const get = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Faild to fetch from ' + url);
  }

  const data = (await response.json()) as unknown;
  return data;
};
