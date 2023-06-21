import { get } from "./axios";

export const fetchPhotos = async () => {
  const { data, ...other } = await get("photos");

  console.log("data", data, other);
  return data;
};
