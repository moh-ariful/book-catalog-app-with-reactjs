import {Navbar, Container, Nav} from "react-bootstrap"


const Navigation = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand><h4 className="title-1">CINTA BUKU</h4></Navbar.Brand>
                <Nav>
                <Nav.Link><h4 className="title-2">TRENDING</h4></Nav.Link>
                <Nav.Link><h4 className="title-2">LARIS</h4></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigation;