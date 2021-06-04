import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Section = ({children}) => {
    return <>
    <Container>
        <Row>
        {children}
        </Row>
    </Container>
    </>
}

export default Section