import axios from 'axios';

const DOMAIN = 'http://localhost:3000';

export const request = async (method, url, data) => {
    await axios({
        method,
        url: DOMAIN + url,
        data,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};