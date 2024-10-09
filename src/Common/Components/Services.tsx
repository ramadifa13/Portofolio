import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    const servicesData = [
        {
            icon: 'mbri-code',
            title: 'Web Development',
            description: 'I build modern, dynamic web applications using technologies like JavaScript, React, Redux, and Node.js, ensuring optimal performance and a responsive user experience.'
        },
        {
            icon: 'mbri-mobile',
            title: 'Mobile App Development',
            description: 'I develop cross-platform mobile applications using React Native and Expo, delivering high-performance apps for both Android and iOS users.'
        },
        {
            icon: 'mbri-database',
            title: 'Backend Development',
            description: 'I design and implement efficient APIs and database management with Node.js, Express, and PostgreSQL to support large-scale applications.'
        },
        {
            icon: 'mbri-responsive',
            title: 'Responsive UI/UX Design',
            description: 'I craft responsive and user-friendly interfaces using HTML, CSS, and frameworks like Bootstrap for consistent experiences across various devices.'
        },
        {
            icon: 'mbri-lock',
            title: 'Security Optimization',
            description: 'I enhance application security by implementing best practices in data protection, authentication, and secure coding to safeguard against vulnerabilities.'
        },
        {
            icon: 'mbri-setting', 
            title: 'Maintenance & Support',
            description: 'I provide ongoing maintenance and support services to ensure smooth operation with regular updates, bug fixes, and performance improvements.'
        }
    ];

    return (
        <>
            <section className="section bg-light" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center">
                                <h2>My <span className="fw-bold">Services</span></h2>
                                <p className="text-muted mx-auto section-subtitle mt-3">
                                    I offer a wide range of development services to help you build high-quality applications with the latest technologies.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {servicesData.map((service, index) => (
                            <Col lg={4} key={index} className="d-flex align-items-stretch">
                                <div className="text-center services-boxes rounded p-4 mt-4 flex-fill">
                                    <div className="services-boxes-icon">
                                        <i className={`${service.icon} text-custom display-4`}></i>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="mb-0">{service.title}</h5>
                                        <div className="services-title-border"></div>
                                        <p className="text-muted mt-3">{service.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
