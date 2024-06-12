import axios from "axios";


export const getHostMetrics = async (token: string) => {
  const response = await axios.get(
    "http://127.0.0.1:8080/host",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("******RESPONSE********", response);
  return response.data;
};
export const getResourcesAll = async (token: string) => {
  const response = await axios.get(
    "http://127.0.0.1:8080/resources",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return response.data;
}
export const createVM = async (token: string, data: any) => {
  const response = await axios.post(
    "http://localhost:8080/instances",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return response.data;

}
