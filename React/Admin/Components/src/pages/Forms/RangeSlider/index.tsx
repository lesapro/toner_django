import React from 'react'
import { Container } from 'react-bootstrap'
import BootstrapRange from './BootstrapRange';
import ColorScheme from './ColorScheme';
import SizeStyling from './SizeStyling';
import NouiSlider from './Nouislider';

const FormRangeSlider = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BootstrapRange />
                <NouiSlider />
                <ColorScheme />
                <SizeStyling />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FormRangeSlider;