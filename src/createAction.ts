/*
 * @Description: 生成 reducer
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-03-22 00:16:26
 * @LastEditTime: 2019-03-22 07:30:54
 */

export default function createAction(action: string[]): object {
  const actionObj = {}
  action.forEach(item => {
    actionObj[item] = payload => {
      return {
        type: item,
        payload,
      }
    }
  })
  return actionObj
}
