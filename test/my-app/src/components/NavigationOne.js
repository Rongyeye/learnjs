import React, {useReducer} from 'react'
const countReducer = function(state, action) {
  switch(action.type){
    case 'add': 
      return {count: state.count+1}
    case 'increase': 
      return {count: state.count-1}
    default:
    return state
  }
}
function NavigationOne () {
  const [state, dispatch] = useReducer(countReducer, {count: 0})
  return (
    <>
      <div>
        NavigationOne
      </div>
      <div>
        <button onClick={()=>dispatch({type: 'add'})}>+</button>
        {/* <button onClick={dispatch({type: 'add'})}>+</button> */}
        count: {state.count}
        <button onClick={()=>dispatch({type: 'increase'})}>-</button>
        {/* <button onClick={dispatch({type: 'increase'})}>-</button> */}

      </div>
    </>
  )
}
export default NavigationOne