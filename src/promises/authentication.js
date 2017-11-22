import axios from 'axios';

export function Authentication() {
    return new Promise((resolve , reject) => {
        const token = localStorage.getItem('current_login_token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
            resolve();
        }
        else {
            axios.defaults.headers.common['Authorization'] = null;
            /*if setting null does not remove `Authorization` header then try
              delete axios.defaults.headers.common['Authorization'];
            */
            reject();
        }
    });

    // console.log('token is: ' , axios.defaults.headers.common['Authorization']);
}