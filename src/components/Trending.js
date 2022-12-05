import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING BOOKS</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
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
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
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
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
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
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
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
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
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
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
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