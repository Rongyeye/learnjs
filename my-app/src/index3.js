//ERROR HANDLING WITH REACT HOOKS
//LOADING INDICATOR WITH REACT HOOKS
import React, { useState, useEffect,Fragment } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
 // 数据响应
function App () {
  const [data,setData] = useState({hits: []})
  const [query,setQuery] = useState('redux')
  const [url,setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux')
  const [isloading, setIsloading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect( () => {
    const fetchData = async () => {
      setIsloading(true)
      setIsError(false)
      try {
        const res = await axios(url)
        setData(res.data)
      } catch (error) {
        setIsError(false)
      }
      setIsloading(false)
    }
    fetchData()
  }, [url]) // url 改变才会重新创建effect
  return (
    <Fragment>
      <input
      type="text"
      value={query}
      onChange={(event)=> setQuery(event.target.value)}/>
      <button onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query={query}`)}>Search</button>
      {isError && <div>:Something wrong...</div>}
      {isloading ? 
        (<p>loading...</p>):
        (<ul>
          {
            data.hits.map(el => (
              <li key={el.id}>
                <a href={el.link}>{el.title}</a>
              </li>
            ))
          }
        </ul>)
      }

    </Fragment>
  )
}
// export default App
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

