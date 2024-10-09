import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Wavify from "react-wavify";
import FadeSection from '../Common/Components/FadeSection';
import CV from '../assets/CV_RamadifaEsaPutra.pdf'; 

const Section = () => {
    return (
        <>
            <section className="section header-bg-img h-100vh align-items-center d-flex" id="home">
                <div className="bg-overlay"></div>
                <Container className="z-index">
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center header-content mx-auto">
                                <h4 className="text-white first-title mb-4">Welcome</h4>
                                <h1 className="header-name text-white text-capitalize mb-0">I'M {" "}
                                    <FadeSection />
                                </h1>
                                <p className="text-white mx-auto header-desc mt-4">Get to know me in more detail.</p>
                                <div className="mt-4 pt-2">
                                    <a href={CV} download className="btn btn-outline-custom btn-round">Download CV</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="wave_sec">
                    <Wavify
                        className="wave"
                        fill="#2e3135"
                        paused={false}
                        options={{
                            height: 100,
                            amplitude: 50,
                            speed: 0.25,
                        }}
                    />
                </div>
            </section>
        </>
    );
};

export default Section;
