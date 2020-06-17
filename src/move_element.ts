/**
 * @param {array} arr  需要移动的数组
 * @param {number} n 需要移动的位数，正数后移，负数前移
 * @return {array} 移动后的数组
 */
export default function moveElement(arr: any[], n: number): any[] {
  if (Math.abs(n) > arr.length) {
    // eslint-disable-next-line no-param-reassign
    n %= arr.length;
  }
  return arr.slice(-n).concat(arr.slice(0, -n));
}
