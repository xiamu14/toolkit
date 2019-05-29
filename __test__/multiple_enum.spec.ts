import MultipleEnum from '../src/multiple_enum';
// import { MultipleEnum } from '../lib';

const fruits = [
  {
    iid: 0,
    desc: '苹果',
    endValue: 1,
  },
  {
    iid: 1,
    desc: '橘子',
    endValue: 2,
  },
  {
    iid: 2,
    desc: '桃花',
    endValue: 3,
  },
];

const fruitsEnum = new MultipleEnum(fruits);

it('multiple enum', () => {
  expect(fruitsEnum.getValArr('desc')).toEqual(['苹果', '橘子', '桃花']);

  expect(fruitsEnum.getItemByObj({ key: 'iid', val: 1 })).toEqual({
    iid: 1,
    desc: '橘子',
    endValue: 2,
  });
});
