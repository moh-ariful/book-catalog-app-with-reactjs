import { Card, Container, Row, Col, Image } from "react-bootstrap"
import javascript from "../assets/images/bestseller/javascript.jpg"
import react from "../assets/images/bestseller/react.jpg"
import python from "../assets/images/bestseller/python.jpg"
import django from "../assets/images/bestseller/django.jpg"
import nginx from "../assets/images/bestseller/nginx.jpg"
import postgre from "../assets/images/bestseller/postgre.jpg"

const Bestseller = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">BEST SELLER</h1>
        <br />
        <Row>
          <Col md={4} className="bookWrapper" id="bestseller">
            <Card className="bookImage">
              <Image src={javascript} alt="Javascript Book" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">There is no friend as loyal as a book - Ernest Hemingway.</Card.Title>
                  <Card.Text className="text-left">
                  What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though( J.D. Salinger).
                  </Card.Text>
                  <Card.Text className="text-left">
                  So many books, so little time(Frank Zappa).
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image src={react} alt="React JS Book" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">There is no friend as loyal as a book - Ernest Hemingway.</Card.Title>
                  <Card.Text className="text-left">
                  What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though( J.D. Salinger).
                  </Card.Text>
                  <Card.Text className="text-left">
                  So many books, so little time(Frank Zappa).
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image src={python} alt="Python Book" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">There is no friend as loyal as a book - Ernest Hemingway.</Card.Title>
                  <Card.Text className="text-left">
                  What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though ( J.D. Salinger).
                  </Card.Text>
                  <Card.Text className="text-left">
                  So many books, so little time(Frank Zappa).
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image
                src={django}
                alt="Django Book"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">There is no friend as loyal as a book - Ernest Hemingway.</Card.Title>
                  <Card.Text className="text-left">
                  What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though ( J.D. Salinger).
                  </Card.Text>
                  <Card.Text className="text-left">
                  So many books, so little time(Frank Zappa).
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image
                src={nginx}
                alt="Nginx Book"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">There is no friend as loyal as a book - Ernest Hemingway.</Card.Title>
                  <Card.Text className="text-left">
                  What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though ( J.D. Salinger).
                  </Card.Text>
                  <Card.Text className="text-left">
                  So many books, so little time(Frank Zappa).
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="bookWrapper">
            <Card className="bookImage">
              <Image src={postgre} alt="PostgreSQL Book" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">There is no friend as loyal as a book - Ernest Hemingway.</Card.Title>
                  <Card.Text className="text-left">
                  What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though ( J.D. Salinger).
                  </Card.Text>
                  <Card.Text className="text-left">
                  So many books, so little time(Frank Zappa).
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

export default Bestseller;
