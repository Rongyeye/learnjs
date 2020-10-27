import React, {useState} from 'react'
import {Divider} from 'antd'
import {Button, Input, message, Spin, List,Pagination} from 'antd';
import { useRequest } from 'ahooks';
import Mock from 'mockjs'
// async fnc
function  changeName (state) {
  console.log(3333, state)
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true})
    }, 1000);
  })
}
// grammar: useRequest(async fnc，options对象)
function UseReq () {
  const [state, setState] = useState('')
  // const [loading, run] = useRequest(changeName, {
  const {loading, run} = useRequest(changeName, {
    manual : true, // 设置 options.manual = true , 则手动调用run执行异步函数changeName
    // async 结果为resolve 触发onSuccess
    onSuccess: function (res, params) { 
      if(res.success) {
        setState('')
        message.success(`The username was changed to ${state}`)
      }
    }
  })
  return (
    <div>
      <Input onChange={(e)=>setState(e.target.value)} 
      value={state}
      style={{width: '200px', marginRight: '20px'}}
      />
      {/* 手动触发调用run，执行异步函数 */}
      <Button onClick={()=>run(state)} loading={loading}>edit</Button>
    </div>
  )
}
// 轮询
/**
 * 
 * pollingInterval:1000 轮询间隔时间
 * pollingWhenHidden=false 暂停定时任务
 * run|cancle 执行|停止
 */
// function  getUseName (state) { // error
//   console.log(state)
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       resolve('interval_name')
//     }, 1000);
//   })
// }
function  getUseName () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('interval_name')
    }, 1000);
  })
}
function Interval () {
  // const [state, setState] = useState('')
  const {data, loading, run, cancel} = useRequest(getUseName,  // async fnc 不传参， data是异步返回的结果,初始值undefined
    {
      pollingInterval: 1000, 
      pollingWhenHidden: false
  })
  return (
    <div>
      <Spin spinning={loading}>
        <p>
          useName: {data}
        </p> 
      </Spin>
      <Button.Group>
        <Button onClick={run} >start</Button> {/**触发run执行async getUseName */}
        <Button onClick={cancel}>cancle</Button>
      </Button.Group>
    </div>
  )
}
// 并行请求
function changeUser (userId) { // 异步请求fnc
  console.log(userId)
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true})
    }, 1000);
  })
}
function Fetches () {
  const users = [
    {id: 1, name: 'name1'},
    {id: 12, name: 'name12'},
    {id: 13, name: 'name13'},
  ]
  const {run, fetches} = useRequest(changeUser, {
    manual: true,
    fetchKey: id => id,
    onSuccess: function (res, params) {
      if (res.success){  
        message.success(`success user ${params[0]}`)
      }
    }
  })
  return (
    <div>
      {
        users.map(item => {
          return (
            <div key={item.id}>
              <Button loading={fetches[item.id]?.loading} 
                onClick={()=>run(item.id)} >{item.name}</Button>
            </div>
          )
        })
      }
    </div>
  )
}

// Pagination
// moke 数据
const userList = (cur, pageSize) => 
  Mock.mock({
    total: 55,
    [`list|${pageSize}`]: [
      {
        id: '@guid',
        name: '@cname',
        'gender|1': ['male', 'female'],
        email: '@email',
        disabled: false,
      },
    ]
  })

function getUserList (cur, pageSize) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(userList(cur, pageSize))
    }, 1000)
  })
}
function UsePagination () {
  const {loading, data , pagination} = useRequest((cur, pageSize) => {
    getUserList(cur, pageSize)
  }, {
    paginated:true
  })
  return (
    <div>
      <List
      loading={loading}
      size="small"
      bordered
      dataSource={data}
      renderItem={ item => <List.Item>{item}</List.Item> }
    />
    <Pagination
      total={data?.list}
      {...pagination}
      showSizeChanger
      showQuickJumper
      showTotal={total => `Total ${total} items`}
    />
    </div>

  )
}
function option1 () {
  return (
    <>
      <p>option1</p>
      <Divider></Divider>
      <div>
        <div>useRequest async</div>
        <UseReq></UseReq>
      </div>
      <div>
        <div>useRequest interval</div>
        <Interval></Interval>
      </div>
      <div>
        <div>useRequest fetches</div>
        <Fetches></Fetches>
      </div>
      <div>
        <div>useRequest Pagination</div>
        <UsePagination></UsePagination>
      </div>

      {/* <Divider></Divider> */}
      {/* {Array(99).fill('1').map(item => <h1>item</h1>)} */}

    </>
  )
}
export default option1