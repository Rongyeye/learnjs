import React, {useState,
  useEffect,
  useReducer,
  useContext,
  Fragment
} from 'react'
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'
import {Input,Button, List, Typography} from 'antd'
// 类型检查
import propTypes from 'prop-types'
// 显示一个 todo 项的列表。一个 todo 项被点击后，会增加一条删除线并标记 completed。
// 新增todo
// 在 footer 里显示一个可切换的显示全部/只显示 completed 的/只显示 incompleted 的 todos。
/**
 * 
 * todo list
 * completed list
 * incompleted list
 */

// action
//  增加事项
let nextTodo = 0
function addTodo (text) {
  return {
    type: 'ADD_TODO',
    id: nextTodo++,
    text
  }
}
// 选择展示
function  setVisibilityFilter (filter) {
  return {
    // showall: 'SHOW_ALL',
    // showCompleted: 'COMPLETE',
    // showIncompleted: 'InCompleted'
    // type: filter,
    // id: filter,
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
// 标记画线
const toggleTodo  = function(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

// reducers
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      })
    case 'TOGGLE_TODO':
      return state.map(item => item.id === action.id ? item.completed=!item.completed : item.completed)      
    default:
      return state
  }
}
function visibleFilters(state = 'SHOW_ALL', action) {
  switch (action.type) {
  // case 'SHOW_ALL':
  //   return state + 1
  // case 'SHOW_COMPLETED':
  //   return state - 1
  // case 'SHOW_INCOMPLETED':
  //   return state - 1
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
// combineReducers合并reducers
let reducers = combineReducers({todos, visibleFilters})
// 创建Store对象new store object
// let store = createStore(reducers)

// components view container
// 一个提醒事项组件
function Todo (clickEvent, isCompleted,text) {
  return (
    <li onClick={() => clickEvent()} style={{textDecoration: isCompleted ?  'line-through': 'none'}}>{text}</li>
  )
}
Todo.propTypes = {
  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  clickEvent: propTypes.func.isRequired,
  isCompleted: propTypes.bool.isRequired,
  text: propTypes.string.isRequired
}
// 事项列表展示
function showTodoList ({list, onTodoClick}) {
  return(
    <ul>
      {  
        list.map(item => 
          <todo key={item.id} {...list} onClick={() => onTodoClick(item.id)}></todo>
        )
      }
    </ul>
  )
}
// 增加事项
let  AddTodo = function (dispatch) {
  let input
  return (
    <form onSubmit={(e) => 
      {
        e.preventDefault(); 
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <input type="text" ref={(node) => input = node}/> <button type="submit">new mention</button>
    </form>
  )
}
// connect
AddTodo = connect()(AddTodo)

//  部分全部展示选择
let SwitchFooter = function (dispatch) {
  return(
    <>
      <button onClick={() => dispatch('SHOW_all')}>all</button>
      <button onClick={() => dispatch('SHOW_COMPLETED')}>completed</button>
      <button onClick={() => dispatch('SHOW_INCOMPLETED')}>incompleted</button>
    </>
  )
}
SwitchFooter = connect()(SwitchFooter)

function NavigationTwo (store) {
  // const [state, dispatch] = 
  return (
    <>
      <div>
        <p>NavigationTwo</p>
      {/* <Provider store={store}>
        <Todo></Todo>
        <showTodoList></showTodoList>
        <SwitchFooter></SwitchFooter>
      </Provider> */}
      </div>
    </>
  )
}
export default NavigationTwo