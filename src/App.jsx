import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import How from './Component/How'
import BestRestaurant from './Component/BestRestaurant'
import Foodfrom from './Component/Foodfrom'
import Service from './Component/Service'
import CustomersSay from './Component/CustomersSay'
import JoinPartnership from './Component/JoinPartnership'
import LatestNews from './Component/LatestNews'
import Subscribe from './Component/Subscribe'
import Footer from './Component/Footer'
import './App.css';





//https://preview.themeforest.net/item/quickeat-food-delivery-react-nextjs-template/full_screen_preview/48581141?_ga=2.238976837.47360255.1709394513-863421594.1707227919&irgwc=1&clickid=RCH0keQntxyKUQ0TNJQNpx2IUksQwnUHEzqsXg0&iradid=275988&irpid=2305834&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_2305834&utm_medium=affiliate&utm_source=impact_radius//


function App() {
  return (
    <div>
   <Navbar />
   <Banner />
   <How />
   <BestRestaurant />
<Foodfrom />
<Service />
<CustomersSay />
<JoinPartnership />
<LatestNews />
<Subscribe />
<Footer />
    </div>
  )
}

export default App
