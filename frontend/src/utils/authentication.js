import { redirect } from "react-router-dom";
export function getTokenDuration(){
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime()- now.getTime();
    return duration;
}

export function getAuthData(){
    if (localStorage.length === 0) {
        return null;
    }
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    
    const tokenDuration = getTokenDuration();
    if (!token) {
        return null;
    }
    if (tokenDuration >= 0) {
        return token == 'EXPIRED'
    }
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