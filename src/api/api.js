import axios from "axios";

const baseURL = "http://40.122.207.194";

export const getMenu = async menus => {
  const { data } = await axios.get(baseURL + "/api?" + menus.join("&"));
  return data;
};
