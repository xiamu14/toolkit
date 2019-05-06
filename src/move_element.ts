/**
 *
 * @param {array} arr  需要移动的数组
 * @param {number} n 需要移动的位数，正数右移，负数左移
 */
export default function moveElement(arr: any[], n: number): any[] {
  if (Math.abs(n) > arr.length) n = n % arr.length;
  return arr.slice(-n).concat(arr.slice(0, -n));
}
