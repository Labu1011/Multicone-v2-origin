import React from 'react'
import { Alert } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ServiceScreen from './screens/ServiceScreen'
import ProjectScreen from './screens/ProjectScreen'

const App = () => {
  return (
    <div className='app'>
      <Alert variant='warning'>Under development...</Alert>
      <Header />
      <main>
        <HomeScreen />
        <ServiceScreen />
        <ProjectScreen />
      </main>
      <Footer />
    </div>
  )
}

export default App
