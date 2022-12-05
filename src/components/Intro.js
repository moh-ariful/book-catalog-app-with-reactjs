import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
        <Container className='text-white d-flex justify-content-center align-items-center text-center'>
          <Row>
            <Col>
            <div className='tagline'>I created this site using </div>
            <div className='tagline'>React JS - Moh Ariful</div>
            <div className='introButton mt-3 text-center'>
                <Button href='#bestseller' variant='info'>See all the lists</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro