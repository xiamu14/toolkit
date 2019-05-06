function axiosParamsConvert(params) {
    var res = {};
    var sign = params.method === "GET" ||
        (params.headers &&
            params.headers["content-type"] === "application/x-www-form-urlencoded");
    Object.keys(params).forEach(function (item) {
        if (sign && item === "data") {
            res["params"] = params["data"];
        }
        else {
            res[item] = params[item];
        }
    });
    return res;
}

export default axiosParamsConvert;
