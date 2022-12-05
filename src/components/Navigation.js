import {Navbar, Container, Nav} from "react-bootstrap"


const Navigation = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/"><h4 className="title-1">LOVE BOOKS</h4></Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending"><h4 className="title-2">TRENDING</h4></Nav.Link>
                <Nav.Link href="#bestseller"><h4 className="title-2">BEST SELLER</h4></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigation;