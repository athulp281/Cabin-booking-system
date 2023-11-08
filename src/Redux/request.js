import axios from "axios";

axios.defaults.baseURL = "https://bookingapp-ctv6.onrender.com/";

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
