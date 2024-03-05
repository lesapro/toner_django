import React from 'react'
import Home from './Home';
import CardData from './CardData';
import TrendingOutfit from './TrendingOutfit';
import TrendingProducts from './TrendingProducts';
import DealOfTheDay from './DealOfTheDay';
import WhyChoose from '../TrendFashion/WhyChoose';
import Instagram from '../TrendFashion/Instagram';
import FeaturedProducts from './FeaturedProducts';

const ModernFashion = () => {
  document.title = "Modern fashion | Toner - React FrontEnd";

  return (
    <React.Fragment>
      <Home />
      <CardData />
      <TrendingOutfit />
      <TrendingProducts/>
      <DealOfTheDay/>
      <FeaturedProducts/>
      <WhyChoose/>
      <Instagram/>
    </React.Fragment>
  )
}

export default ModernFashion;