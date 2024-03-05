import React from 'react'
import Smartwatch from './Smartwatch';
import WatchCollection from './WatchCollection';
import Productvideo from './Productvideo';
import Aboutus from './Aboutus';
import Shoppry from './Shoppry';
const Uniquewatch = () => {
  document.title = "Unique Watches | Toner - React FrontEnd";
  return (
    <React.Fragment>
      <Smartwatch/>
      <WatchCollection/>
      <Productvideo/>
      <Aboutus/>
      <Shoppry/>
    </React.Fragment>
  )
}
export default Uniquewatch;