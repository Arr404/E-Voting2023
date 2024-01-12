import axios from "axios";
import { getAccessToken } from "./auth";
import Swal from "sweetalert2";

const AXIOS_CONFIGURATION = {
    baseURL: "https://api.pemiluhmtitb.web.id/",
    timeout: 20000
};

const headerConfiguration = config => {
    const configuration = { ...config };
    config.headers.authorization = `BEARER ${getAccessToken()}`;
    return configuration;
}

const errorResponseHandling = error => {

    if(typeof error?.response?.data?.message !== 'undefined'){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error?.response?.data?.message
        });
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
    }

    console.error({ ...error });
}

const errorRequestHandling = error => {
    console.error(error); // for debug
};

const service = axios.create(AXIOS_CONFIGURATION);

service.interceptors.request.use(
    config => {
        if (getAccessToken()) {
            return headerConfiguration(config);
        }
        return config;
    },
    error => {
        errorRequestHandling(error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        errorResponseHandling(error);
        return Promise.reject(error);
    }
);

export default service;
