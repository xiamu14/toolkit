/*
 * @Description: axios 参数转换函数，抹平 get/post/application 间传参的差异性
 * @Type: function
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-05-05 18:04:27
 * @LastEditTime: 2019-05-05 18:59:23
 */
export interface Iparams {
  method: string;
  url: string;
  headers?: {
    [key: string]: any;
    "content-type"?: string;
  };
  data: object;
}

interface LooseObject {
  [key: string]: any;
}

export default function axiosParamsConvert(params: Iparams) {
  const res: LooseObject = {};
  const sign =
    params.method === "GET" ||
    (params.headers &&
      params.headers["content-type"] === "application/x-www-form-urlencoded");

  Object.keys(params).forEach(item => {
    if (sign && item === "data") {
      res["params"] = params["data"];
    } else {
      type paramsKey = "method" | "url" | "headers" | "data";
      res[item] = params[item as paramsKey];
    }
  });

  return res;
}
