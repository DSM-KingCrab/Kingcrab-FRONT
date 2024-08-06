import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("access_token");
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/*const result = await instance.post(`${baseURL}/login`,{
  useName: SharedArray,
  password: asdf
})
console.log(result);
return result.data.accessToken;
*/