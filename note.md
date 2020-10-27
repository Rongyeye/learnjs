# learn

**dev develop**

**legoFlow**前端工作流



## xml语法

https://blog.csdn.net/qqliyunpeng/article/details/75043295



## jsx语法

jsx转换js 用babel<script type= "text/babel"></script>

html、js混用

例如：

```
const name = 'aaa'
const element = <div>hello,{name}</div>
```

## 元素

定义元素

```
const element = <h1>Hello, world</h1>;
```

## 渲染修改元素

html根节点

```
<div id="root"></div>
```

把元素渲染到该节点

```
ReactDOM.render(element, document.getElementById('root'));
```



## 组件

定义组件

1、用JavaScript函数定义组件

```
function Welcome(props){//首字母大写
return <h1>Hello,{props.name}</h1>
}
const element = <Welcome name="Sara" />;
```

2、用es6 的class来定义组件

```
class Welcome extends React.Component{//创建组件
render(){//
return <h1>hello,{this.props.name}</h1>;
}
}
const element = <Welcome name="Sara" />;
```

## 渲染组件

```
ReactDOM.render(element, document.getElementById('root'));
```



**例子**

```
function Welcome(props) { 
return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`

**组件复用和组件通信和vue差不多**

## props

## 解构赋值

```
const [a,...b]=[2,3,4,5,6]

console.log(a)//2

console.log(b)//3,4,5
```

```
const o = {a:10,b:5}

const {a:foo,b:bar}= o
console.log(foo)//10
console.log(bar)//5
?????
```

## 类

定义类 

class Rectangle{

}

### 构造方法

constructor创建和初始化一个class创建的对象，一个类只能由一个constructor。有多个constructor则抛出语法错误syntaxerror

### super

`super` 关键字用于调用对象的父对象上的函数

### state

setState

## 域名绑定解决跨域问题

switchhosts 域名绑定

## git分支创建和合并

[https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6](https://git-scm.com/book/zh/v2/Git-分支-分支的新建与合并)

## 相对单位rem和em响应

 https://www.w3schools.com/cssref/css_units.asp

## 伪类



## 雪碧图

## webpack

**模块方法**



**import**

```
import('module路径')
```

```
import {xxxx} from 'module路径'
```



**require.ensure**()

```
 dailySales: resolve =>
    require.ensure(
      [],//字符串数组，声明 callback 回调函数中所需要的所有模块。
      () => resolve(require('views/daily-sales')),//callback
      'dailySales'//chunkName 模块名称
    ),
```



## vue

**state &data**

展示并可以修改请求的数据，如果是全局修改，可以直接在拿到的数据里改，如果是局部修改不希望影响其他组件对请求数据格式的要求或者展示，那么可以把需要修改的数据再次抽取出来。避免数据交叉.

state的数据只能通过mutations 修改。绑定state的数据会报错，无法输入。写在data的数据可以直接绑定修改。

state用于各个组件之间的数据通信，如果一个路由下没有多个组件就不必要用vuex 可以直接把数据存储在data。



**v-for**灵活使用



**ref & $refs**

直接访问子组件

组件

`this.$refs.usernameInput`

子组件

ref为组件赋予一个id引用

`<base-input ref="usernameInput"></base-input>`



**数据劫持**



**路由懒加载**

[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)

[webpack](https://www.webpackjs.com/concepts/)代码分割功能

### 数据处理

**filters过滤器**





## lodash:js工具库

https://www.lodashjs.com/docs/lodash.assign

_assign分配来源对象的可枚举属性到目标对象上

_.assign(object, [sources])

object:target object.

[sources] (...Object): 来源对象。

```
 _.assign(state,{
      // categoryLst:data.categoryLst
      categoryList:categoryList,
      totalRecord:totalRecord
    })
```

```
_.assign(this.addSubForm, {
        parentId: row.categoryId,
        parentRelateName: parentRelateName.join(','),
        applyTo: parentApplyTo,
        disableApplyTo: this.getNotParentApplyTo(parentApplyTo)
      })
```

## element-ui



**el-table/table**

 prop

row

expand





**el-check-ground** 

v-module 绑定的是数组。

## upload







# react

**弹性组件原则**

1. **[不阻断数据流](https://overreacted.io/zh-hans/writing-resilient-components/#原则-1：不阻断数据流)**
2. **[时刻准备渲染](https://overreacted.io/zh-hans/writing-resilient-components/#原则-2：时刻准备渲染)**
3. **[没有单例组件](https://overreacted.io/zh-hans/writing-resilient-components/#原则-3：没有单例组件)**
4. **[隔离本地状态](https://overreacted.io/zh-hans/writing-resilient-components/#原则-4：隔离本地状态)**



**props**

组件中 **直接读取 props**，避免复制 props（或从 props 中计算得到的值) 到 state

**不阻断数据流**即要响应**props**和**state**的变化

- 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidupdate)。
- 如果只想在 **prop 更改时重新计算某些数据**，[请使用 memoization helper 代替](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。
- 如果你想**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。

复杂计算props可以放在render的变量，而不是state。但是复杂计算会发生在组件重复render里

**如果只是要记忆对props复杂计算的结果**：

1 react 内置方法

```
function Button({ color, children }) {
  const textColor = useMemo(
    () => slowlyCalculateTextColor(color),
    [color] // ✅ 除非 `color` 改变，不会重新计算
  );
  return (
    <button className={'Button-' + color + ' Button-text-' + textColor}>
      {children}
    </button>
  );
}
```

2 class组件里： [`memoize-one`](https://github.com/alexreardon/memoize-one)

**根据props变化更新state**

用 props 传入数据的话，组件可以被认为是**受控**（因为组件被父级传入的 props 控制）。数据只保存在组件内部的 state 的话，是**非受控**组件

**响应props变化的生命周期函数**

派生 state

class function

super



注意，无论是将组件编写为类还是函数，都必须**为 effect 响应所有 props 和 state 的更新**

解决：完全受控的组件或者添加key

使用**componentDidUpdate**



当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。**它必须被包裹在一个条件语句里**，正如上述的例子那样进行处理，否则会导致死循环。

```
class SearchResults extends React.Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.fetchResults();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) { // ✅ 重新获取数据
      this.fetchResults();
    }
  }
  fetchResults() {
    const url = this.getFetchUrl();
    // 获取数据...
  }
  getFetchUrl() {
    return 'http://myapi/results?query' + this.props.query; // 使用了props的query属性，则如果props改变，没有响应，解决：componentDidUpdate✅ 更新也处理好了
  }
  render() {
    // ...
  }
}
```

**React.Component api**

**constructor**

在 `constructor()` 函数中**不要调用 `setState()` 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 **`this.state` 赋值初始 state**：

只能在构造函数中直接为 `this.state` 赋值。如需在其他方法中赋值，你应使用 `this.setState()` 替代。

# HOC

React.memo()

如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 `React.memo` 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。`React.memo` 仅检查 props 变更

# hook

## useEffect

```
useEffect(()  =>  {
  // Async Action
}, [dependencies])
```



上面用法中，`useEffect()`接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的**依赖项**，只要这个数组发生变化，`useEffect()`就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行`useEffect()`。

### how to fetch data in react





**where to fetch data**

the fetching component should be a  **common parent component** for **all these components.**

**where to show loading indicatore.g. loading spinner progress bar)**

The loading indicator could be shown in the common parent component from **the first criteria**.(the first standard) .

```
class App extends Component {
 constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
      isLoading: false,
    };
  }
 
  componentDidMount() {
    this.setState({ isLoading: true });
 
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }));
  }
 
 /*In your render() method you can use React's conditional 	   *rendering to display either a loading indicator or the 	   *resolved data.
  */
  render() {
    const { hits, isLoading } = this.state;
 
    if (isLoading) {
      return <p>Loading ...</p>;
    }
 
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
}
```

**keep error data**

```
 
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
      isLoading: false,
      // keep error data
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
 
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      /*When using promises, the catch() block is usually used after the then() block to handle errors.*/
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render(){
 	const {hits, isloading,error} = this.state
 	if (error) {
 		return (<p>error.message</p>)
 	}
 	if (isloading) {
 		return (<p>is loading...</p>)
 	}
 	return (
 		<ul>
 			{
 			 hits.map(
 			 	el => {
 			 		<li key={el.id}><a href={el.url}/></li>
 			 	}
 			 )
 			}
 		</ul>
 	)
  }
}
```

**how to fetch data with axios in react**

```
import axios from 'axios'
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
class fetchAxios extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			hits: [],
			isloading: false,
			error: null
		}
	}
	componendDidMount () {
		this.setState({isloading: true})
		axios.get(API + DEFAULT_QUERY )
			.then(res => this.setState({ 
				hits: res.data.hits
				isloading: false
			}))
			/*
			As you can see, axios returns a JavaScript promise as well. But this time you don't have to resolve the promise two times, because axios already returns a JSON response for you*/
			.catch(error => {
				this.setState({
					error,
					isloading: false
				})
			})
	
	}
	
}
```

**wouldn't use a lifecycle method, but your own class method to fetch data.**

```
import React, { Component } from 'react';
import axios from 'axios';
 
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
 
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }
 
  getStories() {
    this.setState({ isLoading: true });
 
    axios.get(API + DEFAULT_QUERY)
      .then(result => this.setState({
        hits: result.data.hits,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
 
  ...
}
 
export default App;
```

**HOW TO FETCH DATA WITH ASYNC/AWAIT IN REACT?**

```
...
	async componentDidMount() {
		this.setState({isloading: true})
		try {
			const res = await axios.get(api + default_query);
			this.setState({
				hits: res.data.hits,
				isloading: false
			})
		}
		catch (error) {
			this.setState({
			isloading: false,
			error
			})
		}
	}
...
```

**how to fetch data in higher-order components?高阶组件**

```
const withFetching(url,query) => (component) =>...
```

e.g.

```
const withFetching(url,query) => (Component1) =>
	class WithFetching extends React.Component {
		constructor (props) {
			super(props)
			this.state = {
				hits: null,
				isloading: false,
				error: null
			}
		}
		componentDidMount () {
			this.setState({isloading: true})
			axios.get(url+query)
				.then(res => this.setState(data: res.data,isloading: false))
				.catch(error => this.setState({error,isloading: false}))
		}
		render() {
			return {
				<Component1 {...props} {...this.state}/>
			}
		}
	}

const App = ({data,isloading,error}) => {
	if (!data) {
		return <p>No data yet...</p>
	}
	if(isloading) {
		return <p>is loading...</p>
	}
	return (
		<ul>
          {data.hits.map(hit =>
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          )}
        </ul>
	)
}
const api = 'https://my.domain.com?id='
const query = 'fetch'
const AppWithFetch = withFetching(api,query)(App)

ReactDom.render(<AppWithFetch/>)
```

**how to fetch data in render props components**

类似回调函数。解决代码复用 的问题

略

**how to fetch data with React Hook**

**react hook**

The App component shows a list of items (hits = Hacker News articles). The **state and state update** function come from the **state hook called `useState`** that is responsible to **manage the local state** for the data that we are going to fetch for the App component

```

```

// **useEffect** () 副作用钩子 常用于向服务器请求数据.如果没有第二个数组参数，那么在组件渲染的时候就执行useEffect.如果有第二个参数，那么第二个数组得数据发生改变，就会执行**useEffect**

React会记住你提供的**effect**函数，并且会在每次更改作用于DOM并让浏览器**绘制屏幕后去调用它**。

useEffect和componentDidMount区别：

每一次渲染，effect都有它自己的属于某次渲染的props和state。

而componentDidMount则是，指向最新的值，不是特定某次渲染的值。

实例

effect

```
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);//每点击一次，隔三秒输出一次点击后的次数。：一次输出0，1，2...
    }, 3000);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);

```



componentDidMount

````
import React, {Component} from "react";
import ReactDOM from "react-dom";
class Example extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
      // n次点击之后输出n次You clicked n times
    }, 3000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>
          Click me
        </button>
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
````

# 

# redux

**为什么**是redux：多交互多数据来源，某个状态需要在全局里拿到，一个组件修改其他组件的状态，也就是说状态是共享的

**action**

action 规范内必须使用一个字符串类型的 `type` 字段来表示将要执行的动作。描述发生了什么

**reducer**

reducer 就是一个**纯函数**，接收 state 和 action，返回新的 state。根据action的类型来更新state

```
(previousState, action) => newState
```

reducer原理

保持 reducer 纯净非常重要。**永远不要**在 reducer 里做这些操作：

- 修改传入参数；
- 执行有副作用的操作，如 API 请求和路由跳转；
- 调用非纯函数，如 `Date.now()` 或 `Math.random()`。

```
// reducer:
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {...state, ...}
    default:
      return state
  }
}
```

combineReducers

```
rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// rootReducer 将返回如下的 state 对象
{
  potato: {
    // ... potatoes, 和一些其他由 potatoReducer 管理的 state 对象 ... 
  },
  tomato: {
    // ... tomatoes, 和一些其他由 tomatoReducer 管理的 state 对象，比如说 sauce 属性 ...
  }
}
```



store

- 维持应用的 state；
- 提供 [`getState()`](https://www.redux.org.cn/docs/api/Store.html#getState) 方法获取 state；
- 提供 [`dispatch(action)`](https://www.redux.org.cn/docs/api/Store.html#dispatch) 方法更新 state；
- 通过 [`subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 注册监听器;
- 通过 [`subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 返回的函数注销监听器。

只有一个store，多个reducer组合

**connect**

# redux-thunk

redux-thunk在dispatch和reducer之间可以异步操作，异步操作结束后再把真正的action对象dispatch出去

redux thunk

# antdesign