import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CTA = () => {
    
    const handleEmailClick = () => {
        const email = 'ramadifa13@gmail.com';
        const subject = 'Im Interested';
        const body = 'Hallo Rama, . . .';
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <section className="section">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h2 className="fw-bold">Interested in me?</h2>
                        </div>
                        <div className="text-center mt-4">
                            {/* Call the handleEmailClick function on button click */}
                            <button onClick={handleEmailClick} className="btn btn-custom">Hire Me!</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
