import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Catagory from "./Components/Catagory"
import FeatureSection from "./Components/FeatureSection"
import FeatureSection2 from "./Components/FeatureSection2"
import MediCare from "./Components/MediCare"
import Blog from "./Components/Blog"
import Newsletter from "./Components/Newsletter"
import Footer from "./Components/Footer"
//import Service from "./Components/Service"


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Catagory/> 
      <FeatureSection/>
      <FeatureSection2 />
      <MediCare/>
      <Blog />
      <Newsletter/>
      {/* <Service/> */}
      <Footer/>
    </main>
  )
}
export default App


