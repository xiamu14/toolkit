(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['@cat/toolbox'] = factory());
}(this, function () { 'use strict';

  /*
   * @Description: 生成 reducer
   * @Author: Ben
   * @LastEditors: Ben
   * @Date: 2019-03-22 00:16:26
   * @LastEditTime: 2019-03-22 07:30:54
   */
  function createAction(action) {
      var actionObj = {};
      action.forEach(function (item) {
          actionObj[item] = function (payload) {
              return {
                  type: item,
                  payload: payload,
              };
          };
      });
      return actionObj;
  }

  /*
   * @Description: 生成 reducer
   * @Author: Ben
   * @LastEditors: Ben
   * @Date: 2019-03-22 00:16:26
   * @LastEditTime: 2019-03-22 07:28:13
   */
  function createReducer(params) {
      var reducerObj = {};
      params.forEach(function (param) {
          var initState = param.initState, reducers = param.reducers, name = param.name;
          reducerObj[name] = function (state, action) {
              if (state === void 0) { state = initState; }
              if (Object.prototype.hasOwnProperty.call(reducers, action.type)) {
                  return reducers[action.type](state, action);
              }
              return state;
          };
      });
      return reducerObj;
  }

  /*
   * @Description: 导出工具
   * @Author: Ben
   * @LastEditors: Ben
   * @Date: 2019-03-17 13:36:19
   * @LastEditTime: 2019-03-22 07:29:58
   */
  var toolBox = {
      createAction: createAction,
      createReducer: createReducer,
  };

  return toolBox;

}));
