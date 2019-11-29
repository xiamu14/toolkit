/**
 * @desc 多值选择类
 */
import _isEqual from 'lodash.isequal';
export default class Select<T extends Object> {
  data: T[];

  /**
   * 定义具有多值的枚举属性类
   * @param data
   */
  constructor(data: T[]) {
    this.data = data;
  }

  /**
   * 获取数组中此键名的值组成的数组
   * @param key
   */
  vals(key: keyof T) {
    const result = this.data.map(item => item[key]);
    return result;
  }

  /**
   * 根据特定的 key value 获取到数组子项
   * @param key
   * @param val
   */

  item(key: keyof T, val: T[typeof key]) {
    const result = this.data.filter((item: T) => _isEqual(item[key], val));
    if (result.length === 0) {
      throw new Error(`the val:${val} does not exit.`);
    }
    return result[0];
  }
}
