import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 150000,
    
});
// const responseBody = () => (response: AxiosResponse) => response.data
const responseBody = (response: AxiosResponse) => response.data;
const request = {
    get : (url: string) => instance.get(url).then(responseBody), 
    post : (url: string, body: object) => instance.post(url, body).then(responseBody),
    patch : (url: string, body: object) => instance.patch(url, body).then(responseBody),
    delete : (url: string) => instance.delete(url).then(responseBody)
}
export default request;

// const post = (url: string, body:object )=> instance.post(url,body).then(responseBody)

// const patch = (url: string, body:object) => instance.patch(url, body).then(responseBody)

// const _delete= (url: string) =>instance.delete(url).then(responseBody)