## 常用 JS 工具集

## 安装

```
yarn add @redchili/toolkit
```

## 工具介绍

### Select - 多值选择类

有一类枚举在多个场景下展示不同的值，比如：后端定义一类服务，包含多种类型。不同类型对应不同的值，是枚举类型。但在前端可能还需要添加类型的名称，描述等。
一个对象才能构成枚举的一个值，这个类就是用于处理这种场景下多值枚举的取值。
代码实例如下：

```typescript
import {Select} from '@redchili/toolkit';

const fruits = [
  {
    iid: 0, // 数组 index 显式表达为 iid
    desc: '苹果', // 前端展示的描述值
    endValue: 1, // 后端值
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
const fruits = new Select(fruits);

// 获取所有的 desc ，返回数组
fruits.vals('desc'); // ['苹果', '橘子', '桃花']

// 根据特定的 kev-val 获取子项
fruitsEnum.item('iid',1); // {iid:1, desc: '橘子',
    endValue: 2,}
```

### css - 使用 css 语法书写 React.CSSProperties

```tsx
() => {
  return (
    <div
      style={css`
        min-width: 100px;
        display: flex;
        justify-align: center;
      `}
    ></div>
  );
};
```

### checkImgExists - 判断图片链接地址是否有效

返回 `Promise<boolean>`

```ts

checkImgExists('http://xxx.xxx/xxx').then(res => if (res) console.log('图片地址有效，且宽高不为0'))


```

### moveElement - 将数组里的值先前或向后移动位数

```ts
const arr = [1, 2, 3, 4];
const newArr = moveElement(arr, 1); // 数组右移一位
// output [4，1，2，3]
moveElement(arr, -1); // 数组左移一位
// output [2, 3, 4, 1]
```
