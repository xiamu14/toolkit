import { moveElement } from "../src";

const arr = [1, 2, 3, 4];

test("test moveElement", () => {
  expect(moveElement(arr, 1)).toEqual([4, 1, 2, 3]);
  expect(moveElement(arr, -1)).toEqual([2, 3, 4, 1]);
  expect(arr).toEqual([1, 2, 3, 4]);
});
