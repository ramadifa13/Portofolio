/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectDetailModal from "./ProjectDetailModal";
import { WorkData } from "../Data";

const Works = () => {
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleFilter = (value: React.SetStateAction<string>) => {
    setFilter(value);
    setShowAll(false);
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

  const displayedData = showAll ? filteredData : filteredData.slice(0, 6);

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
            {displayedData.map((item, index) => (
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

          {!showAll && filteredData.length > 6 && (
            <div className="text-center mt-4">
              <button
                className="btn btn-secondary "
                onClick={() => setShowAll(true)}
              >
                 See All
              </button>
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
