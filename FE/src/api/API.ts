import axios from "axios";

const url: string = "http://localhost:4477";

export const readEconomy = async () => {
  return await axios.get(`${url}/api/read-economy`).then((res: any) => {
    return res?.data?.data[0].economic;
  });
};

export const readPopulation = async () => {
  return await axios.get(`${url}/api/read-population`).then((res: any) => {
    return res?.data?.data?.population;
  });
};
