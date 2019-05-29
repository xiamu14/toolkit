declare namespace APC {
  /**
   * @interface
   * @type {string} method 方法：GET,POST ...
   * @type {string} url - 接口地址： /api/getPhotos
   * @type {object} headers - 需要重置的头信息
   * @type {object} data - 传递的数据，必须是对象形式
   */
  export interface Iparams {
    method: string;
    url: string;
    headers?: {
      [key: string]: any;
      'content-type'?: string;
    };
    data: object;
  }
}

/**
 * @param {Iparams} params 自定义的原始接口描述
 * @returns 符合 axios 需要的接口描述
 */
export declare function axiosParamsConvert(params: APC.Iparams): any;

/**
 * @param {array} arr  需要移动的数组
 * @param {number} n 需要移动的位数，正数右移，负数左移
 * @return {array} 移动后的数组
 */
export declare function moveElement(arr: any[], n: number): any[];

/**
 * 多值枚举类
 */
type EnumType = {
  [key: string]: any;
}[];

export declare class MultipleEnum {
  constructor(data: EnumType); // 构建函数
  getValArr(key: string): any[];
  getItemByObj(obj: { key: string; val: any }): any;
}
