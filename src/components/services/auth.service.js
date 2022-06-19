import axios from "axios";


const baseURL = "http://localhost:4000/api";

// register request
const register = (newUser) => {
  // POST request on http://localhost:4000/api/register
  return axios
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login request
const login = async (userCredential) => {
  try {
    console.log("Mylogging");
    const response = await axios.post(`${baseURL}/login`, userCredential);
    if (response.data.token) {
      console.log("Mylogging");
      localStorage.setItem("x-access-token", response.data.token);

      localStorage.setItem("username", response.data.username);
    }
    return await Promise.resolve(response.data);
  } catch (error) {
    console.log("Mylogging - error" + error);
    return await Promise.reject(error.response.data);
  }
};

const adminLogin = async (userCredential) => {
  return axios
    .post(`${baseURL}/admin`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-access-token", response.data.token);
        localStorage.setItem("username", response.data.username);
      }
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log("Auth service - error" + error);
      return Promise.reject(error.response.data);
    });
};

// logout service
const logout = () => {
  localStorage.removeItem("x-access-token");
  localStorage.removeItem("username");
  return { msg: "Logout Successfully...!" };
};

const addCourseFunction = async (courseDetail) => {
  // console.log(courseDetail);
  return axios
    .post(`${baseURL}/addCourse`, courseDetail)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error.response.data);
    });
};

const addQuestionFunction = async (questionDetail) => {
  // console.log(courseDetail);
  return axios
    .post(`${baseURL}/addQuestion`, questionDetail)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error.response.data);
    });
};

const addUpdateFunction = async (updateContent) => {
  // console.log(updateContent);
  return axios
    .post(`${baseURL}/addUpdate`, updateContent)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error.response.data);
    });
};

const getCourseFunction = async () => {
  return axios
    .get(`${baseURL}/getCourse`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`Service error ->> ${error}`);
      return Promise.reject(error.response.data);
    });
};
const getQuestionFunction = async () => {
  return axios
    .get(`${baseURL}/getQuestion`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`Service error ->> ${error}`);
      return Promise.reject(error.response.data);
    });
};
const getUpdateFunction = async () => {
  return axios
    .get(`${baseURL}/getUpdate`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`Service error ->> ${error}`);
      return Promise.reject(error.response.data);
    });
};

const addAdminFunction = async (adminContent) => {
  return axios
    .post(`${baseURL}/addAdmin`, adminContent)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.log(`Service error ->> ${error}`);
      return Promise.reject(error.response.data);
    });
};

export {
  register,
  login,
  logout,
  adminLogin,
  addCourseFunction,
  getCourseFunction,
  addUpdateFunction,
  getUpdateFunction,
  addQuestionFunction,
  getQuestionFunction,
  addAdminFunction,
};
