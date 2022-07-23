export const fetchData = async (url) => {
  try {
    const response = await fetch(
      `${process.env.VUE_APP_BASE_API_URL}shorten?url=${url}`,
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      throw Error(response.json());
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
