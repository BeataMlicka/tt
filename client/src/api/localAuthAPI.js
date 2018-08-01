export function setToken(token){
    localStorage.setItem('token', `${token}`); //string and srting
    //console.log('token - ', token);
}

export function getToken(){

    try {
        return localStorage.getItem('token');
    } catch (error) {

    }
}