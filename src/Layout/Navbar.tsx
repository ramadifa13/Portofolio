/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

        const handleLinkClick = () => {
            const navbarToggler : any = document.querySelector(".navbar-toggler");
            if (navbarToggler) {
                navbarToggler.click();
            }
        };

        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(
            "ul.navbar-nav li.nav-item a.nav-link"
        );

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("id");
                    navLinks.forEach((navLink) => {
                        navLink.classList.remove("active");
                        if (navLink.getAttribute("href") === `#${sectionId}`) {
                            navLink.classList.add("active");
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        return () => {
            navLinks.forEach((link) => {
                link.removeEventListener("click", handleLinkClick);
            });
            sectionObserver.disconnect();
        };
    }, []);


    return (
        <>
            <nav className={`navbar navbar-expand-lg custom-nav navbar-light fixed-top ${isSticky ? 'stickyadd' : ''}`}>
                <Container>
                    <Link className="navbar-brand pt-0 logo" to="#">
                        <img src={logo} alt="" className="img-fluid logo-light" />
                        <img src={logoDark} alt="" className="img-fluid logo-dark" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Nav as="ul" className="navbar-nav ms-auto" id="main_nav">
                            <Nav.Item as="li">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#services">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default Navbar;
