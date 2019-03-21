## 常用 JS 工具集

## 安装

```
yarn add univerdal-toolbox
```

## 工具介绍

### Redux 相关组合工具

#### createAction()

```js
import { createAction } from 'universal-toolbox'

const reducers = {
  update: (state, action) => action.payload, // key is constant
}

export const actions = createAction(Object.keys(reducers))

// 在 component 中使用 action

import { connect } from 'react-redux'

@connect(
  ({ userInfo }) => ({ userInfo }),
  dispatch => ({
    onAccept: payload => dispatch(actions.update(payload))
  })
)

```

#### createReducer()

```js
import { createReducer } from 'universal-toolbox'

// just care reducers
const reducers = {
  accept: (state, action) => action.payload, // key is constant
}

// reducer config
const userInfo = {
  name: 'userInfo', // store name
  initState: {},
  reducers,
}

export default userInfo

// store/index.js
import userInfo from './user_info'

const reducers = combineReducers(createReducer([userInfo]))
```
