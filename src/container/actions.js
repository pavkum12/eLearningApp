import * as actionType from './types';
import * as AuthService from '../components/services/auth.service';


// register action
export const registerAction = (payload) => (dispatch) => {
    return AuthService.register(payload)
        .then(response => {

            dispatch({
                type: actionType.REGISTER_SUCCESS,
                payload: response.data
            })

            return Promise.resolve(response.data)

        })
        .catch(error => {

            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: { err: error.message || "Registration Failed" }
            })

            return Promise.reject(error)

        })
}

// login action

export const loginAction = (userCredential) => (dispatch) => {
    return AuthService.login(userCredential)
        .then(data => {

            dispatch({
                type: actionType.LOGIN_SUCCESS,
                payload: data
            })
            return Promise.resolve(data)
        })
        .catch(error => {

            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: { err: error.message || "Login Failed" }
            })
            return Promise.reject(error)
        })
}
export const adminLoginAction = (userCredential) => (dispatch) => {

    return AuthService.adminLogin(userCredential)
        .then(data => {

            dispatch({
                type: actionType.LOGIN_SUCCESS,
                payload: data
            })
            return Promise.resolve(data)
        })
        .catch(error => {
            console.log("Logging -2 -error");
            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: { err: error.message || "Login Failed" }
            })
            return Promise.reject(error)
        })
}

// logout action
export const logoutAction = () => (dispatch) => {
    try {
        const msg = AuthService.logout()
        dispatch({
            type: actionType.LOGOUT,
            payload: { msg }
        })

        return Promise.resolve(msg)
    }
    catch (err) {
        return Promise.resolve(err)
    }
}

export const addCourseAction = (courseContent) => async (dispatch) => {
    try {
        return AuthService.addCourseFunction(courseContent)
            .then(data => {

                dispatch({
                    type: actionType.ADDCOURSE,
                    payload: { data }
                })
                return Promise.resolve(data)
            })
            .catch(error => {
                console.log("Action Error =>" + error.message);
                dispatch({

                    payload: { err: error.message || "Add Failed" }
                })
                return Promise.reject(error)
            })

    }
    catch (err) {
        console.log(err);
    }
}

export const getCourseAction = () => async (dispatch) => {
    try {
        return AuthService.getCourseFunction().then(data => {
            dispatch({
                type: actionType.GETCOURSE,
                payload: { data }
            })
            return Promise.resolve(data)
        })
            .catch(err => {
                console.log("GET course error ->", err);
                dispatch({

                    payload: { err: err.message || "Get Failed" }
                })
                return Promise.reject(err)
            })
    } catch (error) {

    }
}
export const getUpdateAction = () => async (dispatch) => {
    try {
        return AuthService.getUpdateFunction().then(data => {
            dispatch({
                type: actionType.GETUPDATE,
                payload: { data }
            })
            return Promise.resolve(data)
        })
            .catch(err => {
                console.log("GET course error ->", err);
                dispatch({

                    payload: { err: err.message || "Get Failed" }
                })
                return Promise.reject(err)
            })
    } catch (error) {

    }
}
export const addUpdateAction = (updateContent) => async (dispatch) => {
    try {
        return AuthService.addUpdateFunction(updateContent)
            .then(data => {

                dispatch({
                    type: actionType.ADDUPDATE,
                    payload: { data }
                })
                return Promise.resolve(data)
            })
            .catch(error => {
                console.log("Action Error =>" + error.message);
                dispatch({

                    payload: { err: error.message || "Add Failed" }
                })
                return Promise.reject(error)
            })

    }
    catch (err) {
        console.log(err);
    }
}