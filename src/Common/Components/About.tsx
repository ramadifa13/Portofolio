import React from "react";
import about from "../../assets/images/about.jpg";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="mt-3">
                <img
                  src={about}
                  alt=""
                  className="img-fluid mx-auto d-block img-thumbnail"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-3">
                <h2>
                  <span className="fw-bold">About</span> Me
                </h2>
                <h4 className="mt-4">
                  Hello!{" "}
                  <span className="text-custom fw-bold">
                    I'M Ramadifa Esa Putra.
                  </span>
                </h4>
                <p className="text-muted mt-4">
                  I hold a Bachelor's degree in Informatics Engineering, earned
                  in 2020 with a GPA of 3.36, and have had experience as a
                  developer for approximately 4 years. My unwavering
                  determination and dedication drive me to carry out every task
                  diligently and responsibly.
                </p>
                <p className="text-muted mt-2">
                  I have outstanding adaptability and a high spirit of learning,
                  allowing me to overcome various challenges that arise. In my
                  work, I prefer to use JavaScript/TypeScript, React JS, React
                  Native, Expo, Redux, Node JS, Express, and PostgreSQL.
                </p>
                <p className="text-muted mt-2">
                  With my technical skills and strong commitment, I believe I
                  can make a meaningful contribution to achieving the company's
                  goals.
                </p>

                <div>
                  <ul className="mb-0 about-social list-inline mt-4">
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/rama.dep"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/ramadifaesaputra"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mdi mdi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
