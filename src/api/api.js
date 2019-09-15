import axios from "axios";

const baseURL = "http://40.122.207.194";

export const getMenu = async menus => {
  try {
    const { data } = await axios.get(baseURL + "api?" + menus.join("&"));
    console.log(data);
    //    return data;
  } catch (e) {
    console.log("loading menu just failed.");
    console.log(e);
  }
};
