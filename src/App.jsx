import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App