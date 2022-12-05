import { Card, Container, Row, Col, Image } from "react-bootstrap"
import javascript from "../assets/images/superhero/javascript.jpg"
import react from "../assets/images/superhero/react.jpg"
import python from "../assets/images/superhero/python.jpg"
import django from "../assets/images/superhero/django.jpg"
import nginx from "../assets/images/superhero/nginx.jpg"
import postgre from "../assets/images/superhero/postgre.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">BEST SELLER</h1>
        <br />
        <Row>
          <Col md={4} className="bookWrapper" id="bestseller">
            <Card className="movieImage">
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
            <Card className="movieImage">
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
            <Card className="movieImage">
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
            <Card className="movieImage">
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
            <Card className="movieImage">
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
            <Card className="movieImage">
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

export default SuperHero
