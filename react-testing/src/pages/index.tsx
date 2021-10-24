import type { NextPage } from 'next'
import React from 'react'
import { Counter } from '../components/Counter/Counter'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello React.js Testing Series Friends!!!</h1>
      <Counter description="My Counter" defaultCount={0} />
    </div>
  )
}

export default Home
