import React, {useContext} from 'react'
import {createStore, applyMiddleware} from 'redux' // 中间件
import {Input,Button, List} from 'antd'
import { Provider } from 'react-redux'
// redux
class Simple1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleList = this.handleList.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange () {
    this.setState(store.getState())
  }
  handleInputChange(e) {
    console.log('e.target.value', e.target.value)
     store.dispatch(actions({type:'input_value_change',value: e.target.value}))
  }
  handleList () {
    store.dispatch(actions({type:'add_list_item'}))
  }
  render() {
    return (
      <>  
        {/* Fragment 一个组件返回多个jsx元素是不合法的*/}
        <p>
          <Input style={{width:'200px', marginRight: '20px'}}
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.inputValue} // {表达式}
          /> 
          <Button type="primary" onClick={() => this.handleList()}>submit</Button>
        </p>
        <List
        size="small"
        bordered
        dataSource={this.state.list}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      </>
    )
  }

  

}
// action
const actions = function (action) {
  return {
    type: action.type,
    value: action.value|| null
  }
}
// reducer
const initial = {inputValue: 'default',list: [1,2]}
let reducer = function (state = initial, action) {
  let newState = {}
  switch(action.type) {
    case 'input_value_change':
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case 'add_list_item':
      newState = JSON.parse(JSON.stringify(state))
      newState.list.push(state.inputValue)
      return newState
    default: 
      return state
  }
}
// store
let store = createStore(reducer, applyMiddleware) // 中间件
function Simply () {
  return(
    <>

    </>
  )
}

// react hook  instead of redux
// useContext 
const Action = function(action) {
  return {
    type: action.type,
    todo: action.todo|null,
    index: action.index|null
  }
}
const Istate = {
  todos: [],
  lastUpdate: null
}
const Reducer = function(state= Istate|null|undefined, action=Action) {
  if(!state) {
    return null
  }
  switch(action.type) {
    case 'add_todo':
      return {
        ...state,
        lastUpdate: Date.now(),
        todos: state.todos.concat(action.todo)
      }
    case 'delete_todo':
      {
        const todos = state.todos.slice() // copy state
        todos.splice(action.index, 1)
        return {
          ...state,
          lastUpdate: Date.now(),
          todos: todos
        }
      }
  }
}
const makeStore = function () {
  return createStore(Reducer, {
    todos:[
      'have lunch',
      'go shopping',
      'make a plan'
    ],
    lastUpdate: 0,
  })
}
const appStore = makeStore()
// 全局context
// context 对象
// const contextobj = React.createContext()
// const appContext = useContext(null)
function InputTodo () {
  return(
    <div>
      <Input style={{width:'200px'}}></Input>
    </div>
  )
}
function TodoList () {
  return(
    <div>
      <List></List>
    </div>
  )

}
function TodoApp () {
  return (
    <>
      {/* <Provider store={appStore}>
        <h1>Todo</h1>
        <InputTodo/>
        <TodoList/>
      </Provider> */}
    </>

  )
}
function NavigationFine (store) {
  // const [state, dispatch] = 
  return (
    <>
      <div>
        <p>NavigationFine</p>
        <p>hook--redux</p>
      {/* <Provider store={store}>
        <Todo></Todo>
        <showTodoList></showTodoList>
        <SwitchFooter></SwitchFooter>
      </Provider> */}
        <Simply></Simply>
        <TodoApp></TodoApp>
      </div>
    </>
  )
}
export default NavigationFine

const Observer = (function() {
  let _message = {}
  return {
    on: function() {

    },
    off: function() {

    },
    subcribe: function() {}

  }
})()