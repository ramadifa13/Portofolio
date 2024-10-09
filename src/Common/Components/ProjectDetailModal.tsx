import React from "react";
import { Modal, Button } from "react-bootstrap";

interface ProjectDetailModalProps {
  show: boolean;
  handleClose: () => void;
  project: {
    title: string;
    category: string;
    imageSrc: string;
    description: string;
    stack: string[];
    type: string; 
  } | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  show,
  handleClose,
  project,
}) => {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="custom-modal"
    >
      <Modal.Body
        className="p-4"
        style={{
          maxHeight: "70vh",
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "20px",
        }}
      >
        <div
          className="position-relative mb-4"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          <img
            src={project.imageSrc}
            alt={project.title}
            className="img-fluid shadow-sm"
            style={{ width: "100%", height: 100, objectFit: "cover" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
          >
            <h5 className="fw-bold mb-1" style={{ fontSize: "1.8rem" }}>
              {project.title}
            </h5>
            <h6 className="fst-italic" style={{ fontSize: "1.2rem" }}>
              {project.category}
            </h6>
          </div>
        </div>
          <div>
            <p className="text-dark" style={{ lineHeight: "1.5", textAlign: "justify" }}>
              {project.description}
            </p>
          </div>
        <div className="d-flex justify-content-between mb-4">
        <div>
          <h6 className="fw-bold text-dark">Technology Stack:</h6>
          <ul className="list-unstyled">
            {project.stack.map((tech, index) => (
              <li key={index} style={{ lineHeight: "1.5", color: "black" }}>
                - {tech}
              </li>
            ))}
          </ul>
        </div>
          <div className="text-end">
            <h6 className="fw-bold text-dark">Project:</h6>
            <p className="text-dark">{project.type}</p>
          </div>
        </div>

      </Modal.Body>

      <Modal.Footer style={{ borderTop: "none", backgroundColor: "#f9f9f9" }}>
        <Button
          variant="secondary"
          onClick={handleClose}
          style={{
            borderRadius: "20px",
            padding: "10px 20px",
            backgroundColor: "#6c757d",
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetailModal;
