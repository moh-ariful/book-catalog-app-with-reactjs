import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
        <Container className='text-white d-flex justify-content-center align-items-center text-center'>
          <Row>
            <Col>
            <div className='tagline'>PUSTAKA ONLINE</div>
            <div className='tagline'>ONLINE KOMPLIT</div>
            <div className='introButton mt-3 text-center'>
                <Button variant='info'>Lihat semua daftarnya</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro