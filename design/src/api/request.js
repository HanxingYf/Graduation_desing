const axios = require("axios");

export async function request(url, params, method = "get") {
  if (/get/i.test(method)) {
    return axios.get(url, { params }).then((res) => {
      return res;
    });
  }
  if (/post/i.test(method)) {
    var config = {
      method,
      url,
      data: params,
    };
    return axios(config)
      .then(function (response) {
        console.log(response, 'res')
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
