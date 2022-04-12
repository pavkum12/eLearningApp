import axios from 'axios';

const baseURL = "http://localhost:4000/api";

// register request
const register = (newUser) => {
    // POST request on http://localhost:4000/api/register
    return axios.post(`${baseURL}/register`, newUser)
        .then(response => {
            if (response) {
                return Promise.resolve(response)
            }
        })
        .catch(error => {
            return Promise.reject(error.response)
        })
}

// login request
const login = async (userCredential) => {
    try {
        console.log("Mylogging");
        const response = await axios.post(`${baseURL}/login`, userCredential);
        if (response.data.token) {
            console.log("Mylogging");
            localStorage.setItem("x-access-token", response.data.token);
        }
        return await Promise.resolve(response.data);
    } catch (error) {
        console.log("Mylogging - error" + error);
        return await Promise.reject(error.response.data);
    }
}

// const adminLogin = (userCredential) => {
//     console.log("Mylogging");
//     return axios.post(`${baseURL}/adminlogin`, userCredential)
//         .then(response => {
//             console.log("Mylogging");
//             if (response.data.token) {
//                 localStorage.setItem("x-access-token", response.data.token)
//             }
//             return Promise.resolve(response.data)
//         })
//         .catch(error => {
//             console.log("Mylogging - error" + error);
//             return Promise.reject(error.response.data)
//         })
// }

// logout service
const logout = () => {
    localStorage.removeItem('x-access-token')
    return { msg: "Logout Successfully...!" }
}

export {
    register,
    login,
    logout,
    // adminLogin
}

