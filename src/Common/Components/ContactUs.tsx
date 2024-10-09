import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = event.currentTarget.subject.value;
    const message = event.currentTarget.comments.value;

    const mailtoLink = `mailto:ramadifa13@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`${message}`)}`;

    // Redirect to mailto link
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="text-center">
                <h2>
                  <span className="fw-bold">Contact</span> Me
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  Feel free to reach out! I’m here to answer any questions you
                  may have or to discuss your projects. Let's connect and make
                  things happen!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={4}>
              <div className="text-center">
                <div>
                  <i className="mbri-mobile2 text-custom h1"></i>
                </div>
                <div className="mt-3">
                  <h5 className="mb-0 contact_detail-title fw-bold">
                    Whatsapp me
                  </h5>
                  <p className="text-muted">+6285186671308</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center">
                <div>
                  <i className="mbri-letter text-custom h1"></i>
                </div>
                <div className="mt-3">
                  <h5 className="mb-0 contact_detail-title fw-bold">
                    Email me At
                  </h5>
                  <p className="text-muted">ramadifa13@gmail.com</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center">
                <div>
                  <i className="mbri-pin text-custom h1"></i>
                </div>
                <div className="mt-3">
                  <h5 className="mb-0 contact_detail-title fw-bold">
                    Visit me
                  </h5>
                  <p className="text-muted">
                    Housing de perigi regency, lettu abdul karim street. Rt01/07 block b 12, bedahan, sawangan, depok, Indonesia.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={12}>
              <div className="form-kerri contact_form">
                <div id="message"></div>
                <Form method="post" onSubmit={handleSubmit} id="working_form">
                  <Row>
                    <Form.Group className="mt-2">
                      <Form.Control
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Your Subject.."
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <Form.Control
                          name="comments"
                          id="comments"
                          as="textarea"
                          rows={4}
                          placeholder="Your message..."
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="text-end mt-2">
                      <Button
                        type="submit"
                        id="submit"
                        className="submitBnt btn btn-custom"
                      >
                        Send Message
                      </Button>
                      <div id="simple-msg"></div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
