import { Card, Container, Row, Col, Image } from "react-bootstrap"
import cctv from "../assets/images/trending/cctv.jpg"
import webserver from "../assets/images/trending/webserver.jpg"
import micro from "../assets/images/trending/micro.jpg"
import raspberry from "../assets/images/trending/raspberry.jpg"
import elit from "../assets/images/trending/elit.jpg"
import otomasi from "../assets/images/trending/otomasi.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING BOOKS</h1>
        <br />
        <Row>
          <Col md={4} className="bookWrapper" id="trending">
            <Card className="bookImage">
              <Image src={cctv} alt="Pustaka Online" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Books are a uniquely portable magic - Stephen King.</Card.Title>
                  <Card.Text className="text-left">
                  That's the thing about books. They let you travel without 
                  moving your feet. Books must be read as deliberately and reservedly as they were written - Jhumpa Lahiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                  A reader lives a thousand lives before he dies.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image
                src={webserver}
                alt="Pustaka Online"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                  Books are a uniquely portable magic - Stephen King.
                  </Card.Title>
                  <Card.Text className="text-left">
                  That's the thing about books. They let you travel without 
                  moving your feet. Books must be read as deliberately and reservedly as they were written - Jhumpa Lahiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                  A reader lives a thousand lives before he dies - George R. R. Martin.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image src={micro} alt="Micro Python Book" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Books are a uniquely portable magic - Stephen King.</Card.Title>
                  <Card.Text className="text-left">
                  That's the thing about books. They let you travel without 
                  moving your feet. Books must be read as deliberately and reservedly as they were written - Jhumpa Lahiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                  A reader lives a thousand lives before he dies - George R. R. Martin.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image src={raspberry} alt="Raspberry Book" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Books are a uniquely portable magic - Stephen King.</Card.Title>
                  <Card.Text className="text-left">
                  That's the thing about books. They let you travel without 
                  moving your feet. Books must be read as deliberately and reservedly as they were written - Jhumpa Lahiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                  A reader lives a thousand lives before he dies - George R. R. Martin.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image
                src={elit}
                alt="Elit Globalis Book"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Books are a uniquely portable magic - Stephen King.</Card.Title>
                  <Card.Text className="text-left">
                  That's the thing about books. They let you travel without 
                  moving your feet. Books must be read as deliberately and reservedly as they were written- Jhumpa Lahiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                  A reader lives a thousand lives before he dies - George R. R. Martin.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="BookImage">
              <Image src={otomasi} alt="Buku Otomasi Rumah" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Books are a uniquely portable magic - Stephen King.</Card.Title>
                  <Card.Text className="text-left">
                  That's the thing about books. They let you travel without 
                  moving your feet. Books must be read as deliberately and reservedly as they were written - Jhumpa Lahiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                  A reader lives a thousand lives before he dies - George R. R. Martin.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trending