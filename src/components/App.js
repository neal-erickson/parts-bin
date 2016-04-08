'use strict'

import React from 'react'
import Header from './Header'
import PartsList from './PartsList'

// handy information:
// http://davidandsuzi.com/writing-a-basic-app-in-redux/
// https://github.com/gaearon/react-hot-boilerplate

const App = () => (
  <div>
    <div>
      <Header />
    </div>
    <hr />
    <div>
      <PartsList />
    </div>
  </div>
)

export default App
