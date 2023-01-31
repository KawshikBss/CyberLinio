import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
});

const responseBody = (response) => response.data;

const requests = {
    get: (url) => instance.get(url).then(responseBody).catch(responseBody),
    post: (url, body, token) =>
        instance.post(url, body, token).then(responseBody).catch(responseBody),
    patch: (url, body) => instance.patch(url, body).then(responseBody).catch(responseBody),
    delete: (url) => instance.delete(url).then(responseBody).catch(responseBody),
};

export default requests;
