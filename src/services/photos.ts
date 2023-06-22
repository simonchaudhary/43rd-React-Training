import { get } from "./axios";

export const fetchPhotos = async () => {
  const { data } = await get("photos");

  return data;
};
