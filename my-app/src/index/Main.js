// 路由 配置
import React from 'react'
import {Route,Switch} from "react-router-dom";
import NavigationOne from '../components/NavigationOne.js'
import NavigationTwo from '../components/NavigationTwo.js'
import NavigationThree from '../components/NavigationThree.js'
import NavigationFour from '../components/NavigationFour.js'
import NavigationFine from '../components/NavigationFine.js'
import option1 from '../components/option1.js'

function Main () {
  return (
    <>
      <Switch>
        <Route  path="/NavigationOne" component={NavigationOne} />
        <Route  path="/NavigationTwo" component={NavigationTwo} />
        <Route  path="/NavigationThree" component={NavigationThree} />
        <Route  path="/NavigationFour" component={NavigationFour} />
        <Route  path="/NavigationFine" component={NavigationFine} />
        <Route  path="/option1" component={option1} />
      </Switch>
    </>
  )
}

export default Main
