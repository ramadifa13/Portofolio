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
                  I am a passionate Full-Stack Developer with over 4 years of
                  professional experience in building scalable and efficient web
                  and mobile applications. Holding a Bachelor's degree in
                  Informatics Engineering with an impressive GPA of 3.36, I
                  bring a combination of strong technical expertise and a deep
                  commitment to delivering exceptional results. My adaptability,
                  problem-solving skills, and eagerness to learn new
                  technologies allow me to thrive in dynamic environments and
                  overcome challenges effectively. 
                </p>
                <p className="text-muted mt-2">
                  I have outstanding adaptability and a high spirit of learning,
                  allowing me to overcome various challenges that arise. In my
                  work, I prefer to use JavaScript/TypeScript, React JS, React
                  Native,Next JS, Expo, Redux, Node JS, Express, Nest JS and PostgreSQL.
                </p>
                <p className="text-muted mt-2">
                   I am confident that my
                  skills, experience, and dedication can make a significant
                  contribution to achieving the company's goals.
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
