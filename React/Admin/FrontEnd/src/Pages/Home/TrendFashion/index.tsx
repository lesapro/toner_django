import React from 'react'
import Banner from './Banner'
import Premium from './Premium'
import TopPicks from './TopPicks'
import DealofDay from './DealofDay'
import NewArrival from './NewArrival'
import WhyChoose from './WhyChoose'
import Instagram from './Instagram'

const TrendFashion = () => {

  document.title = "Trend Fashion | Toner - React FrontEnd";

  return (
    <React.Fragment>
      <Banner />
      <Premium />
      <TopPicks />
      <DealofDay />
      <NewArrival />
      <WhyChoose />
      <Instagram />
    </React.Fragment>
  )
}

export default TrendFashion