import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link,} from 'react-router-dom'
const { SubMenu } = Menu;
function Nav () {
  const handleClick = e => {
    console.log('click ', e);
  };
  //  二级折叠导航
  const navList = [
    {
      key: '/option1',
      title: 'option1',
      icon: AppstoreOutlined,
      children: [],
      path: '/option1'
    },
    {
      key: 'sub1',
      title: 'Navigation One',
      icon: MailOutlined,
      children: [
        {
          key: '/NavigationTwo',
          title: 'option2',
          icon: '',
          path: '/NavigationTwo',
          children: []
        },
        {
          key: '/NavigationThree',
          title: 'option3',
          icon: '',
          path: '/NavigationThree',
          children: []
        },
        {
          key: '/NavigationOne',
          title: 'option4',
          icon: '',
          path: '/NavigationOne',
          children: []
        },
        {
          key: '/NavigationFour',
          title: 'option5',
          icon: '',
          path: '/NavigationFour',
          children: []
        },
        {
          key: '/NavigationFine',
          title: 'option6',
          icon: '',
          path: '/NavigationFine',
          children: []
        },

      ]
    },

  ]
    // 获取前的路由值
  // const path = browserHistory.getCurrentLocation().pathname react-router v4 不支持
  // const path = 1
  // console.log(333,this.props) undefined
  const url = window.location.href.split('//')[1]
  const path = url.indexOf('?') ===-1 ? url.slice(url.indexOf('/')) : url.slice(url.indexOf('/'), url.indexOf('?'))

  console.log(222, path)

  return (
    <>
      <Menu
        onClick={handleClick}
        style={{ width: 240 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        selectedKeys={[path]}
      >
        {navList.map(item => {
          if(item.children.length === 0){
            return (
              <Menu.Item key={item.key} icon={<item.icon/>}>
                  <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
          } else {
            return (
              <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                {item.children.map(el => {
                  return (
                    <Menu.Item key={el.key} >
                        <Link to={el.path}>{el.title}</Link>
                    </Menu.Item>
                  )
                })}
            </SubMenu>
            )     
          }
        })}
      </Menu>
    </>
  )
}
export default Nav
  // function loopMap (arr) {
  //   arr.map(item => {
  //     console.log(1, item)
  //     if (item.children.length === 0) {
  //       console.log(2, item.key)
  //       return (
  //         <Menu.Item key={item.key} icon={<item.icon/>}>
  //           {item.title}
  //         </Menu.Item>
  //       )
  //     } else {
  //       console.log(3, item.children)
  //       return (
  //         <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
  //           {/* {loopMap(item.children)} */}
  //       </SubMenu>
  //       )        
  //     }
  //   })  
  // }