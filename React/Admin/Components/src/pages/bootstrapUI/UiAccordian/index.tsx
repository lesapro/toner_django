import React from 'react'
import { Container } from 'react-bootstrap'
import Collapse1 from './Collapse'
import DefaultFlush from './DefaultFlush'
import IconInlineBlockCollapse from './IconInlineBlockCollapse'
import LeftBordered from './LeftBordered'
import MultipleTargets from './MultipleTargets'
import Nesting from './Nesting'
import PlusIcon from './PlusIcon'
import WithWithoutIcons from './WithWithoutIcons'
import FillColored from './FillColored'


const AccordianCollapse = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <DefaultFlush />
                    <WithWithoutIcons />
                    <PlusIcon />
                    <LeftBordered />
                    <Nesting />
                    <FillColored />
                    <Collapse1 />
                    <IconInlineBlockCollapse />
                    <IconInlineBlockCollapse />
                    <MultipleTargets />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AccordianCollapse;