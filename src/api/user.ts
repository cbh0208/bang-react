import {request} from './request'


/**登录 */
export function login(username:string,password:string){
    return request({
        url:'/user/login/',
        method:'post',
        data:{
            username,
            password
        }
    })
}

/**注册 */
export function reg(username:string,password:string){
    return request({
        url:'user/reg/',
        method:'post',
        data:{
            username,
            password
        }
    })
}