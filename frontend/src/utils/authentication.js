import { redirect } from "react-router-dom";

export function getAuthData(){
    const token = localStorage.getItem('token')
    return token;
}
export function loadToken(){
    return getAuthData()
}
export function checkAuthLoader(){
    const token = getAuthData();
    if (!token) {
        return redirect('/auth')
    }
    return null;
}