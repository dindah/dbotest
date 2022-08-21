import axios from 'axios';

export const RequestHandlerLogin = async (url, method) => {
    const config = {
        url: url,
        method: method
    }
    return await axios(config);

}
