//FETCHING DATA WITH FORMS AND REACT

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
  }, [url]) 
  return (
    <Fragment>
    <form onSubmit={event => {
        setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        event.preventDefault()
      }
      }>  
      <input
        type="text"
        value={query}
        onChange={(event)=> setQuery(event.target.value)}/>
      <button type="submit" onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query={query}`)}>Search</button>
    </form>

      {isError && <div>:Something wrong...</div>}
      {isloading ? 
        (<p>loading...</p>):
        (<ul>
          {
            data.hits.map(el => (
              <li key={el.objectID}>
                <a href={el.url}>{el.title}</a>
              </li>
            ))
          }
        </ul>)
      }

    </Fragment>
  )
}
// export default App
ReactDOM.render(<App/>, document.getElementById('root')) 