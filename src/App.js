import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ServiceScreen from './screens/ServiceScreen'
import ProjectScreen from './screens/ProjectScreen'
import TeamMembersScreen from './screens/TeamMembersScreen'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <HomeScreen />
        <ServiceScreen />
        <ProjectScreen />
        <TeamMembersScreen />
      </main>
      <Footer />
    </div>
  )
}

export default App
