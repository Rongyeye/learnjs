import React, {useState,
  useEffect,
  useReducer,
  useContext,
  Fragment
} from 'react'
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux'
import {connect} from 'react-redux'
import {Input,Button, List} from 'antd'
// redux
const actions = function (action) {
  return {
    type: action.type,
    value: action.value|| null
  }
}

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
let store = createStore(reducer)
class Simple extends React.Component {
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
        <p>
          <Input style={{width:'200px', marginRight: '20px'}}
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.inputValue}
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
function NavigationFour (store) {
  // const [state, dispatch] = 
  return (
    <>
      <div>
        <p>NavigationFour</p>
      {/* <Provider store={store}>
        <Todo></Todo>
        <showTodoList></showTodoList>
        <SwitchFooter></SwitchFooter>
      </Provider> */}
        <Simple></Simple>
      </div>
    </>
  )
}
export default NavigationFour