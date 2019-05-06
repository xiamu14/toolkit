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

/**
 * @param {array} arr  需要移动的数组
 * @param {number} n 需要移动的位数，正数右移，负数左移
 * @return {array} 移动后的数组
 */
function moveElement(arr, n) {
    if (Math.abs(n) > arr.length)
        n = n % arr.length;
    return arr.slice(-n).concat(arr.slice(0, -n));
}

export { axiosParamsConvert, moveElement };
