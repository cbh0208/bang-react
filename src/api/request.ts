import axios from "axios";

const baseURL='http://127.0.0.1:5000/'

export function request(config:any){
    const instance = axios.create({
        baseURL:baseURL,
    })

    /**请求拦截器 */
    instance.interceptors.request.use(
        (req)=>{
            return req
        },
        (err)=>{
            return Promise.reject(err);
        })

    /**响应拦截器 */
    instance.interceptors.response.use(
        (res)=>{
            return res.data ? res.data : res;
        },
        (err)=>{
            return Promise.reject(err);
        }
    )


    return instance(config)
}
