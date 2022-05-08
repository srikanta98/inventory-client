import axios from "axios";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status === 403){
        // refresh token 
        // send to the server
    }
    return Promise.reject(error);
  });

  export default axiosPrivate;
  // https://i.ibb.co/qsd4NtP/appleapple-8.png
// https://i.ibb.co/yyhqTNL/asus.png
// https://i.ibb.co/KymSnf1/asus-rog3.png
// https://i.ibb.co/zmYHrpD/dell-inspiron-5518-l-pngffff.png
// https://i.ibb.co/7jRkkhZ/final-hpii.png
// https://i.ibb.co/hsx4bpV/final-rax.png
// https://i.ibb.co/4ZzxBhh/pop.png
// https://i.ibb.co/j386dVZ/popkkk.png
// https://i.ibb.co/BtwSBNH/r0g6-real-final.png
// https://i.ibb.co/ZM2ydZC/real-lap.png
// https://i.ibb.co/tQY8fHt/rog-strix-g-ggfinal.png
// https://i.ibb.co/8XMSLCK/Think-Pad-Z16-01.png