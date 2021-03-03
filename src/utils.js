export const USERKEY = 'USER'

export function getTokenFromLocalStorage() {
    const user = localStorage.getItem(USERKEY);

    if(user && user.token) return JSON.parse(user);

    return {
        email: '',
        id: '',
        token: ''
    }
}

export function putTokenInLocalStorage(user) {
    localStorage.setItem(USERKEY, JSON.stringify(user));
}