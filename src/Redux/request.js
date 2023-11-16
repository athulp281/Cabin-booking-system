import axios from "axios";

axios.defaults.baseURL = "https://bookingapp-5zvh.onrender.com/";

const request = (options) => {
    let headers = {
        "Content-Type": "application/json",
    };

    Object.assign(options, { headers });

    return axios(options)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("error in request", err.response);
            return err.response.data;
        });
};

export default request;
