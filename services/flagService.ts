import axios from "axios";

export const getFlags = async ():Promise<IFlag[]> => {
  try {
    const res = await axios.get(`/api/flags/`);
    return res.data
  } catch (error) {
    throw new Error(error);
  }
};


export const enableFlag = async ({queryKey}):Promise<IFlag> => {
  try {
    const res = await axios.get(`/api/flags/`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const checkFlag = async ({queryKey}):Promise<boolean> => {
  try {
    const key = queryKey[1];
    if (key === null) {
      throw new Error("Send key");

    }
    const res = await axios.get(`/api/flags/${key}/check`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
