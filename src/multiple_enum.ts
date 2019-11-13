/**
 * 多值枚举类
 */

type EnumType = {
  [key: string]: any;
}[];

export default class MultipleEnum {
  data: EnumType;
  /**
   * 定义具有多值的枚举属性类
   * @param data
   */
  constructor(data: EnumType) {
    this.data = data;
  }

  /**
   * 获取数组中此键名的值组成的数组
   * @param key
   */
  getValArr(key: string) {
    const result = this.data.map(item => item[key]);
    return result;
  }
  /**
   * 根据特定的 key value 获取到数组子项
   * @param obj key - val
   */
  getItemByObj(obj: { key: string; val: any }) {
    let result = {};
    this.data.forEach(item => {
      if (item[obj.key] === obj.val) {
        result = item;
      }
    });
    return result;
  }
}
