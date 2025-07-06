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
                  I am a versatile and results-driven Full-Stack Developer with
                  over 5 years of experience building scalable web and mobile
                  applications across fintech, healthtech, and government
                  sectors. I hold a Bachelor's degree in Informatics Engineering
                  with a GPA of 3.36 and have a strong foundation in delivering
                  high-impact digital solutions.
                </p>
                <p className="text-muted mt-2">
                  I specialize in technologies such as JavaScript/TypeScript,
                  React.js, React Native, Next.js, Redux, Node.js, Nest.js,
                  Express.js, Java Spring Boot, and Golang. I am also
                  experienced in implementing clean architecture, CI/CD
                  pipelines, and deploying to cloud environments using AWS and
                  Kubernetes.
                </p>
                <p className="text-muted mt-2">
                  I thrive in Agile teams and enjoy solving complex problems
                  with maintainable, user-centric solutions. With strong
                  adaptability and a continuous learning mindset, I’m committed
                  to contributing meaningfully to every project I take on.
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
