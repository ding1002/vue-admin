import cookie from "cookie_js";
export function getToken(user){
    return cookie.get(user);
}
export function setToken(user,token){
    return cookie.set(user,token);
}