import Select from '../src/select';

const status = [
  {
    id: 0,
    value: '开启',
  },
  {
    id: 1,
    value: '关闭',
  },
];

const statusEnum = new Select(status);

test('test statusEnum', () => {
  expect(statusEnum.vals('id')).toEqual([0, 1]);
  expect(statusEnum.item('value', 1)).toEqual({ id: 0, value: '开启' });
});
