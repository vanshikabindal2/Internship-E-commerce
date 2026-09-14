import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home.jsx'
import New from './Pages/New-Arrival/New.jsx'
import Category from './Pages/ShopCategory/Category.jsx'
import Trending from './Pages/Trending/Trending.jsx'
import Footer from './Pages/Footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <New/>
      <Category/>
     < Trending />
     <Footer/>
    </div>
  )
}

export default App
