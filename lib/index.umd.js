(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['universal-toolbox'] = factory());
}(this, function () { 'use strict';

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

  return axiosParamsConvert;

}));
