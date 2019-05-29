(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['universal-toolbox'] = {}));
}(this, function (exports) { 'use strict';

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

  /**
   * 多值枚举类
   */
  var MultipleEnum = /** @class */ (function () {
      /**
       * 定义具有多值的枚举属性类
       * @param data
       */
      function MultipleEnum(data) {
          this.data = data;
      }
      /**
       * 获取数组中此键名的值组成的数组
       * @param key
       */
      MultipleEnum.prototype.getValArr = function (key) {
          var result = this.data.map(function (item) { return item[key]; });
          return result;
      };
      /**
       * 根据特定的 key value 获取到数组子项
       * @param obj key - val
       */
      MultipleEnum.prototype.getItemByObj = function (obj) {
          var result = {};
          this.data.forEach(function (item) {
              if (item[obj.key] === obj.val) {
                  result = item;
                  return true;
              }
          });
          return result;
      };
      return MultipleEnum;
  }());

  exports.axiosParamsConvert = axiosParamsConvert;
  exports.moveElement = moveElement;
  exports.MutipleEnum = MultipleEnum;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
