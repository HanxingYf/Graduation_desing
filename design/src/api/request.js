const axios = require("axios");
export function request(url, params, method = "get") {
  if (/get/i.test(method)) {
    return axios.get(url, { params }).then((res) => {
        return res
    });
  }
}
