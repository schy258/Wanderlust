import React from 'react'
import Copyrightsec from '../Components/Footer/Copyrightsec'
import FooterPart from '../Components/Footer/FooterPart'
import About from '../Components/Home/About'
import Banner from '../Components/Home/Banner'
import ChooseUS from '../Components/Home/ChooseUS'
import Navbar from '../Components/Home/Navbar'
import Services from '../Components/Home/Services'
import Video from '../Components/Home/Video'
import VisitedPlaces from '../Components/Home/VisitedPlaces'

export default function Homepage() {
  return (
    <>
    <div class="header_section">
    <Navbar/>
    <Banner/>
    </div>
    <Services/>
    <About/>
    <Video/>
    <VisitedPlaces/>
    <ChooseUS/>
    <FooterPart/>
    <Copyrightsec/>
    </>
  )
}
