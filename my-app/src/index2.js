      import React, { Fragment, useContext, useRef } from 'react'
      import ReactDOM from 'react-dom'
      import './index.css'
      import axios from 'axios'
      // import useState Hook 
      import { useState, useEffect} from 'react'
      import propTypes from 'prop-types'
      import {Link, BrowserRouter  as Router, Route} from 'react-router-dom'
      function Square (props) { //  类似函数，接受任意的入参（props） 返回需要展示的页面内容
        return <button className="square" 
          onClick={()=>props.onClick()}>{props.value}</button>
      }
      class Board extends React.Component {
        renderSquares (i) {
          return (
            <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>
          )
        }
        // 讲模板转换成html
        render () {
          return (
            <div>
              <div className="board-row">
              {/* 直接插入变量 {变量}*/}
                {this.renderSquares(0)}
                {this.renderSquares(1)}
                {this.renderSquares(2)}
              </div>
              <div className="board-row">
                {this.renderSquares(3)}
                {this.renderSquares(4)}
                {this.renderSquares(5)}
              </div>
              <div className="board-row">
                {this.renderSquares(6)}
                {this.renderSquares(7)}
                {this.renderSquares(8)}
              </div>
            </div>   
          )
        }
      }
      class Game extends React.Component {
        constructor (props) {
          super(props)
          this.state = {
            history:[{
              squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
          }
        }
        handleClick (i) {
          // copy
          const history = this.state.history.slice(0, this.state.stepNumber+1)
          const current = history[history.length - 1]
          const squares = current.squares.slice()
          const winner = calculateWinner(squares)
          if (winner || squares[i]) {
            return
          } 
          squares[i] = this.state.xIsNext ? 'X' : 'O'
          // this.setState({
          //   history: history.concat([{squares:squares}]),
          //   xIsNext: !this.state.xIsNext,
          //   stepNumber: history.length
          // })
          this.setState({
            history: history.concat([{
              squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
          });
        }
        jumpTo (move) {
          this.setState({
            stepNumber: move,
            xIsNext: (move % 2) === 0
          })
        }
        render () {
          let status
          const history = this.state.history
          const current = history[this.state.stepNumber]
          const winner = calculateWinner(current.squares)
          status = winner ?  `winner${winner}` :  `next player is : ${this.state.xIsNext ? 'X' : 'O'}`
          const moves = history.map((step, move) => {
            const desc = move ? `go to move ${move}` : `go to start `
            return (
              // in map function need to define property key
              <li key={move}>
                <button onClick={()=>this.jumpTo(move)}>{desc}</button>
              </li>
            )
          })
          return (
            <div className="game">
              <div className="game-board">
                <Board 
                squares={current.squares} 
                onClick={i=>{ this.handleClick(i)}}/>
              </div>
              <div className="game-info">
                {status}
                <ol>{moves}</ol>
              </div>
            </div>
          )
        }
      }
      // change module into html,insert into specified dom
      // 调用ReactDOM.render 
      ReactDOM.render(
        <Game/>, // 要渲染的模板
        document.getElementById('root') // 挂载的dom节点
      )
      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      // ref
      // create ref
       
      function RefComponent (props) {
         
        const [ref, setref] = useState(React.createRef())
        return (
          <div ref={ref}></div>
        )
      }
      // error
       
      function Refcomponent (props) {
        // simplify
        const myref = React.createRef()
          // get ref use ref.current
           
          const node = myref.current
        return (
          <div>
            <button ref={myref}>click</button>
          </div>
        )
      } 
      class ContextInput extends React.Component {
        constructor(props){
          super(props)
          // create ref
          this.textInput = React.createRef()
          this.focustextInput = this.focustextInput.bind(this)
        }
        focustextInput () {
          // attach ref by current
          this.textInput.current.focus()
        }
        render() {
          return (
            <div>
              <input ref={this.textInput}></input>
              <button onClick={this.focustextInput()}></button>
            </div>
          )
        }
      }
      // lifecycle function mounted
       
      class AutoMounted extends React.Component {
        constructor (props) {
          super(props)
          this.textInput = React.createRef()
        }
        componentWillMounted () {

        }
        componentDidMount () {
          // once mount, focus()
          this.textInput.current.focustextInput()
        }
        componentWillUpdate () {

        }
        componentDidUpdate () {

        }
        componentWillUnmount () {

        }
        render () {
          return (
            <ContextInput ref={this.textInput}/>
          )
        }
      }
      // can't use ref in function component
      // function component no state,no function
      // solve : useref(),return an ref object
       
      function ContextInputText (props) {
        const inputText = useRef(null)
        function handleClick () {
          inputText.current.focus()
        }
        return (
          <div>
            <input type="text" ref={inputText}></input>
            <button onClick={handleClick()}/>
          </div>
        )
      }
      // deliver refs as params
       
      class Sup extends React.Component {
        subref = React.createRef()
        render () {
          return (
            <div>
              <Sub forwardRef={this.subref}></Sub>
            </div>
          )
        }
      }
      class Sub extends React.Component {
        render () {
          const forwardRef = this.props
          return (
            <div ref={forwardRef}></div>
          )
        }
      }
      // propTypes in dev env
      class Greeting extends React.Component {
        // 1 
        propTypes = {
          greet: React.PropTypes.string.isRequared
        }
        // propTypes default value
        getDefaultProps = function () {
          return {
            greet: 'default value'
          }
        }
        render () {
          return (
            <div>
              {this.props.greet}
            </div>
          )
        }
      }
      // 2
      Greeting.propTypes = {
        greet:propTypes.string
      }
      // hook钩子，把组件写成纯函数，需要什么功能就引用什么进来，主要的有。以use为前缀：useState,useContext,useReducer,useEffect
      // useState() 状态钩子
       
      function Ex () {
        // useState Hook cache inside state
        const [count, setCount] = useState(0) // useState(0)接受状态的初始值
        // [count, setCount]数组的第一个成员是变量，第二个成员是函数，用来更新状态，命名规则是set前缀加上状态的变量名。
        // const [count2, setCount2] = useState(0)
        return (
          <div>
            <p>you click {count} times</p>
            {/* <button onClick={()=>this.setState({count: this.state.count + 1})}/> */}
            <button onClick={()=> setCount(count + 1)}>click</button>
          </div>
        )
      }


      // 共享状态 hooks： useContext()
      // React.createContext(默认值default value) api 在组件外部建立一个context
      const ColorContext = React.createContext('white') 

      class AppComponent extends React.Component {
        render () {
          return (
            <ColorContext.provider vlaue = "black">
              <TarBar/>
              <effectComponent/>
            </ColorContext.provider>
          )
        }
      }
      function  TarBar () {
        const {context} = useContext(ColorContext) // useContext()钩子函数用来引入Context对象
        return (
          <div>
            <ColorButton/>
            {context}
          </div>
        )
      }
      class ColorButton extends React.Component {
        static colorcontext = ColorContext
        render () {  
          return (
            <div>
              <button> {this.context}</button>
            </div>
          )
        }
      }
      /**
       * fetch data in lifecycle function : componentDidMount()
       * 
       */
      class fetchData extends React.component{
        constructor (props) {
          super(props)
          this.state = {
            data: null
          } 
        }
        componentDidMount () {
          fetch('https://api.mydomain.com')
          .then(response => response.json())
          .then(data => this.setState({data}))
        }
      }
      const api = 'https://hn.algolia.com/api/v1/search?query='
      const default_query = 'redux'
      class fetchData2 extends React.component {
        constructor (props) {
          super(props) 
          this.state = {
            site: []
          }
        }
        componentDidMount() {
          fetch(api+default_query)
          .then(response => response.json())
          .then(data => this.setState({site: data.site}))
        }
      }
      const withFetching = (url) => (Component) =>
  class WithFetching extends React.Component {
    constructor(props) {
      super(props);
 
      this.state = {
        data: null,
        isLoading: false,
        error: null,
      };
    }
 
    componentDidMount() {
      this.setState({ isLoading: true });
 
      axios.get(url)
        .then(result => this.setState({
          data: result.data,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }
 
    render() {
      return <Component { ...this.props } { ...this.state } />;
    }
  }
      // useEffect () 副作用钩子 常用于向服务器请求数据
       
      function effectComponent () {
        const [count, setCount] = useState(0)
        // instead of lifecycle componentDidMount and componentDidUpdate
        useEffect(() => {
          document.title = `you click ${count} times`
        })
        return (
          <div>
            <div>click{count}times</div>
            <button onClick={setCount({count: count+1})}>click</button>
          </div>
        )
      }
      function fetchWithUseState () {
        const [data,setData] = useState({hits: []})
        useEffect(async () => {
          const res = await axios.get('https://my.domain.com')
          setData(res.data)
        }, []) // provide an empty array as second argument to the effect hook,to avoid fetch data on component updata,but only for component mounting
        // empty array don't have to watch any change
        return (
          <ul>
            {
              data.hits.map(el => {
                <li key={el.id}>
                <a href={el.link}>{el.title}</a>
                </li>
              })
            }
          </ul>
        )
      }
      function fetchWithUseState2 () {
        const [data,setData] = useState({hits: []})
        // useEffect(async () => {
        //   const res = await axios.get('https://my.domain.com')
        //   setData(res.data)
        // }, []) 
        useEffect( () => {
          const fetchData = async () => {
            const res = await axios.get('https://my.domain.com')
            setData(res.data)
          }
          fetchData()
        }, []) 
        return (
          <ul>
            {
              data.hits.map(el => {
                <li key={el.id}>
                <a href={el.link}>{el.title}</a>
                </li>
              })
            }
          </ul>
        )
      }
     
      // an effect hook should return nothing or a clean up function
      // clean effect ?


      // useReducer()状态管理hook，react本身不提供状态管理功能，使用外部库。常用的状态管理库是redux
      // useReducer函数 接收 reducer函数，和状态初始值。返回的是一个数组，数组的第一个成员是状态的当前值，第二个成员是发送action的dispatch函数？？？
      // 写一个reducer函数   

      // const [state, dispatch] = useReducer(reducer,initialState) 
      // function App() {
      //   const [state, dispatch] = useReducer(myReducer, { count: 0 })
      //   // state的初始值是{count:0},
      //   return (
      //     <div className="App">
      //       <button onClick={() => dispatch({ type: 'countUp' })}>
      //         +1
      //       </button>
      //       <p>Count: {state.count}</p>
      //     </div>
      //   );
      // }
      function myreducer (state, type) {
        switch(type) {
          case 'countUp': 
            return {
              ...state,
              data: state.data + 1
            }
          default: 
            return state
        }
      }
      function App() {
        const [state, dispatch] = useReducer(myreducer, {data: 0})
        const action = () => {
          dispatch('countUp')
        }
        return (
          <div>
            <button onClick={action}>add 1</button>
            <p>计数：{state.data}</p>
          </div>
        )
      }

      // diff ???
      // no React.router
      // const About = React.createClass({/*...*/})
      // const Inbox = React.createClass({/*...*/})
      // const Home = React.createClass({/*...*/})
       
      // no use react-router
       
      // const App1 = React.createClass({
      //   getInitialState() {
      //     return {
      //       // return string
      //       route: window.location.hash.substr(1)
      //     }
      //   },
      //   componentDidMount() {
      //     window.addEventListener('hashchange', () => {
      //       this.setState({
      //         // current location return a specified part of given String,substr(start, end)
      //         route: window.location.hash.substr(1)
      //       })
      //     })
      //   },
      //   render() {
      //     let Child
      //     switch (this.state.route) {
      //       case '/about': Child = About; break;
      //       case '/inbox': Child = Inbox; break;
      //       default:      Child = Home;
      //     }

      //     return (
      //       <div>
      //         <h1>App</h1>
      //         <ul>
      //           <li><a href="#/about">About</a></li>
      //           <li><a href="#/inbox">Inbox</a></li>
      //         </ul>
      //         <Child/>
      //       </div>
      //     )
      //   }
      // })
      // use React.router
      const App = React.createClass({
        render () {
          return (
            <div>
              <h1>App</h1>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
              </ul>
              {this.props.children}
              {/* this.props.children  represent all son node*/}
            </div>
          )
        }
      })
      // createClass not a function
      class About extends React.Component {
      // const About = React.createClass ({
        render () {
          return (
            <div>about</div>
          )
        }
      }
      class Inbox extends React.Component{
        render () {
          return (
          <div>
          inbox
          <p>{this.props.children || "inbox"}</p>
          </div>
          )
        }
      }
      class Message = React.createClass({
        render() {
          return (
            <div>message{this.props.params.id}</div>
          )
        }
      })
      const IndexPage = React.createClass({
        render () {
          return <div>app index page</div>
        }
      })
      React.render((
        // <Router history={browserHistory}>
        <Router>
          <Route path="/" component={App}>
          {/* default route */}
            <IndexRoute component={IndexPage}></IndexRoute>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
              {/* absolute path */}
              {/* <Route path="Message/:id" component={Message}/> */}
              <Route path="/message/:id" component={Message}/>
              <regredit from="message/:id" to="/message/:id"></regredit>
            </Route>
          </Route>
        </Router>
      ), document.body)
      // vitural Dom => ref skip
      // forms key:onChange
      // controlled components
        
      class NameForm extends React.Component { // es6 can not bind specified this
        constructor (props) {
          super(props)
          this.state = {
            value: ''
          }
          // bind method create a function that has the same this scope wherever used
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
        }
        handleChange (event) {
          // main concept: this.setState({})
          this.setState({
            value: event.target.value
          })
        }
        handleSubmit (event) {
          event.preventDefault()
        }
        render () {
          const  value = this.state.value
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  名字：
                  <input type="text" value={value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit"></input>  
              </form>
            </div>
          )
        }
      }
      /* lifecycle three states, five function*/
      // timer
       
      class Timer extends React.Component {
        constructor (props) {
          super(props)
          this.state = {
            opacity: 1.0
          }
        }
        componentDidMount () {
          this.timer = setInterval(function () {
            var opacity = this.state.opacity
            opacity -= 0.5
            if (opacity < 0.1) opacity = 1
            this.setState({
              opacity: opacity
            })
          }.bind(this), 1000)
        }
        render () {
          return (
            <div>
              {/* error <div style="opacity:{this.state.opacity}"></div> */}
              <div style={{opacity: this.state.opacity}}></div>
            </div>
          )
        }
      }
       
      class SetAjax extends React.Component {
        constructor (props) {
          super(props)
          this.state = {
            value: '',
            err: ''
          }
        }
        componentDidMount () {
          this.props.promise.then(
            value => this.setState({value: value}),
            error => this.setState({err: error})
          )
        }
      }
      React.render (
        // <SetAjax promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}></SetAjax>
      )
      // promise
      // redux