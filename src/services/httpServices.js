import axios from "axios";
import { encode } from "base-64";
const auth = {
        username: "ck_dd8c21e9fdc09271b79d37c82afb078520bf9daf",
        password: "cs_858c09ed6e8031b86b2e630f9f0bc992d45b7eae",
    };
const instance = axios.create({
    baseURL: "https://api.sohojearning.com/wp-json/wc/v3/",
});

instance.interceptors.request.use(function (config) {
    return {
        ...config,
        headers: {
            Accept: "application/json",
            Authorization: `Basic ${encode((auth.username + ':' + auth.password))}`,
            "Content-Type": "multipart/form-data",
        },
    };
});

const responseBody = (response) => response.data;

const requests = {
    get: (url) => instance.get(url).then(responseBody).catch(responseBody),
    post: (url, body, token) =>
        instance.post(url, body, token).then(responseBody).catch(responseBody),
    patch: (url, body) =>
        instance.patch(url, body).then(responseBody).catch(responseBody),
    delete: (url) =>
        instance.delete(url).then(responseBody).catch(responseBody),
};

export default requests;
