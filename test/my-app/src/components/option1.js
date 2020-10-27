import React from 'react'
import {Divider} from 'antd'
import { Row, Col } from 'antd';
function option1 () {
  return (
    <>
      <div>
      option1
      <Divider></Divider>
      {Array(99).fill('1').map(item => <h1>item</h1>)}
      </div>
    </>
  )
}
export default option1