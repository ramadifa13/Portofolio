/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectDetailModal from "./ProjectDetailModal";
import { WorkData } from "../Data";

const Works = () => {
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const handleFilter = (value: React.SetStateAction<string>) => {
    setFilter(value);
    setCurrentPage(1); // Reset to the first page when changing filter
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const filteredData = WorkData.filter(
    (item) => filter === "all" || item.category.includes(filter)
  );

  // Calculate the indices for slicing the data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <section className="section bg-light text-center" id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  My <span className="fw-bold">Projects</span>
                </h2>
                <p className="text-muted mx-auto section-subtitle mt-3">
                  Here are some applications I have built showcasing my skills
                  in web and mobile development.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <ul
              className="col list-unstyled list-inline mb-0 text-uppercase work_menu"
              id="menu-filter"
            >
              <li className="list-inline-item">
                <Link
                  to="#"
                  onClick={() => handleFilter("all")}
                  className={filter === "all" ? "active" : ""}
                >
                  All
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  onClick={() => handleFilter("Mobile App")}
                  className={filter === "Mobile App" ? "active" : ""}
                >
                  Mobile App
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  onClick={() => handleFilter("Web Application")}
                  className={filter === "Web Application" ? "active" : ""}
                >
                  Web Application
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4 work-filter">
            {currentData.map((item, index) => (
              <div key={index} className="col-lg-4 work_item">
                <div
                  className="img-zoom"
                  onClick={() => handleProjectClick(item)}
                >
                  <div className="work_box">
                    <div className="work_img">
                      <img
                        src={item.imageSrc}
                        className="img-fluid mx-auto d-block rounded"
                        alt={item.alt}
                      />
                    </div>
                    <div className="work_detail">
                      <p className="mb-2">{item.category}</p>
                      <h4 className="mb-0">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="text-center mt-4">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                      className="page-link rounded-pill"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      &laquo; Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                    >
                      <button
                        className="page-link rounded-pill mx-1"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button
                      className="page-link rounded-pill"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </section>
      <ProjectDetailModal
        show={showModal}
        handleClose={handleClose}
        project={selectedProject}
      />
    </>
  );
};

export default Works;
