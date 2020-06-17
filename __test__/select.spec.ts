import { Select } from "../src";

const status = [
  {
    id: 0,
    value: "开启",
    items: [0],
  },
  {
    id: 1,
    value: "关闭",
    items: [1],
  },
];

const statusEnum = new Select(status);

test("test statusEnum", () => {
  expect(statusEnum.vals("id")).toEqual([0, 1]);
  expect(statusEnum.item("id", 1)).toEqual({
    id: 1,
    value: "关闭",
    items: [1],
  });
  expect(statusEnum.item("items", [1])).toEqual({
    id: 1,
    value: "关闭",
    items: [1],
  });
});
