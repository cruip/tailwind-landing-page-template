export const apiURL = `http://1.10.11.107:8080/`
export const token = () => { return localStorage.getItem('JWToken') || '' }