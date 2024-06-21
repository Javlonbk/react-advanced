import React from 'react'
import { Child } from './child'
import { ErrorBoundary } from './components/error-boundry'

const App = () => {
  return (  
    <div>
      <h1>Parent</h1>
      <ErrorBoundary fallback={<h1 style={{color:"red"}}>Error in Child Component+</h1>}>
      <Child/>
      </ErrorBoundary>
    </div>
  )
}

export default App