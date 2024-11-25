import axios from 'axios'
const serverUrl = "http://13.232.73.53:8000/"

export const ApiPost = async (Api, userData) => {
    return await axios
        .post(serverUrl + Api, userData)
        .then((response) => {
            console.log(response.data, '---------------------------Axios Api data')
            return response.data
        })
        .catch((error) => {
            console.log(error, '---------------------------Axios Api error')
            return error
        });
};  