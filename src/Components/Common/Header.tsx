import React from 'react';
import { Navbar, Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone, BsCartCheck } from 'react-icons/bs';
import logo from "Components/Common/Img/logo.png";
import { BiSearch, BiUserCircle } from 'react-icons/bi';
const Header = () => {
    return (
        <>
            <div className="top-header Header__Components">
                <Container className="d-flex justify-content-between py-2 border-box ">
                    <ul className="list-unstyled d-flex align-item-center gp-4 bg-light">
                        <li>
                            <FiPhoneCall />
                            <a href="tel:880199999">+880199999</a>
                        </li>
                        <li>
                            <FaRegEnvelope />
                            <a href="mail-to:support.travely.com">support.travely.com</a>
                        </li>
                    </ul>
                    <div>
                        <BsPhone />
                        <a href="https://github.com/">support.travely.com</a>
                    </div>
                </Container>

            </div>

            <div className="middle-header">
                <Container>
                    <div className="d-flex align-item-center">
                        <img className="branding-img" src={logo} alt="" />
                    
                    <InputGroup>
                        <FormControl
                        className="border border-primary"
                            placeholder="Search here.."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            <BiSearch className="text-white"/>
                        </Button>
                    </InputGroup>
                    <ul className="icon-list d-flex justify-content-center  list-unstyled">
                        <li>
                        <BsCartCheck />
                        </li>
                        <li>
                        <BiUserCircle />
                        </li>
                    </ul>
                </div>
                </Container>
            </div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Catagories</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </>
    );
};
export default Header;