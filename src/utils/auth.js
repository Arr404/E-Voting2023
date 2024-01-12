const TokenKey = "UIxITB-TOKEN";
const TokenUser = "iniUser";
const TokenPlus = "hoak"

export function getTokenHasil() {
    return localStorage.getItem(TokenPlus);
}

export function setTokenHasil(token) {
    return localStorage.setItem(TokenPlus, token);

}

export function getAccessToken() {
    return localStorage.getItem(TokenKey);
}

export function setAccessToken(token) {
    return localStorage.setItem(TokenKey, token);

}
export function setUserToken(token) {
    return localStorage.setItem(TokenUser, token);
}
export function getUserToken() {
    return localStorage.getItem(TokenUser);
}

export function removeAccessToken() {
    return localStorage.removeItem(TokenKey);
}
