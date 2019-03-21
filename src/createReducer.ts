/*
 * @Description: 生成 reducer
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-03-22 00:16:26
 * @LastEditTime: 2019-03-22 07:28:13
 */

interface reducerInfo {
  initState: any
  reducers: object
  name: string
}

export default function createReducer(params: reducerInfo[]): object {
  const reducerObj = {}
  params.forEach(param => {
    const { initState, reducers, name } = param
    reducerObj[name] = (state = initState, action) => {
      if (Object.prototype.hasOwnProperty.call(reducers, action.type)) {
        return reducers[action.type](state, action)
      }
      return state
    }
  })
  return reducerObj
}
