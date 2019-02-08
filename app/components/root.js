import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'
import AllCandies from './AllCandies'

const Root = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <h3>Goodie Bag</h3>  
          <Link to='/api/candies'>All Candies!</Link>
          <Link to='/'>Home</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path='/api/candies' component={AllCandies}/>
          <Route path='/api/candies/:candyId' component={SingleCandy}/>
        </main>
      </div>
    </HashRouter>
  )
}

export default Root
