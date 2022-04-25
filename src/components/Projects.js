import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';
//import image from '../img/code.jpg';

const Projects = () => {
  const imageUrl = 'img/code.jpg';
  return (
    <section className="projects">
      <h3 className="sec-heading">
          Projects
      </h3>
      <div className="proj-content">
        <div className="row">
          <div className="col-md-4">
            <div className="p-card">
              <div className="card-image">
                <h2>Project Heading</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nisl interdum, 
                  tempus orci ac, consequat est. Fusce eget ultricies libero. Sed viverra purus sapien, 
                  et ultrices sapien ultrices in. Orci varius natoque penatibus et magnis dis parturient 
                  montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className="card-footer">
                <div className="code-links">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faEye} size="md" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCode} size="md" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="p-card">
            <div className="card-image">
             <h2>Project Heading</h2>
            </div>
              <div className="card-body">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nisl interdum, 
                  tempus orci ac, consequat est. Fusce eget ultricies libero. Sed viverra purus sapien, 
                  et ultrices sapien ultrices in. Orci varius natoque penatibus et magnis dis parturient 
                  montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className="card-footer">
                <div className="code-links">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faEye} size="md" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCode} size="md" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="p-card">
            <div className="card-image">
            <h2>Project Heading</h2>
            </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nisl interdum, 
                  tempus orci ac, consequat est. Fusce eget ultricies libero. Sed viverra purus sapien, 
                  et ultrices sapien ultrices in. Orci varius natoque penatibus et magnis dis parturient 
                  montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className="card-footer">
               <div className="code-links">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faEye} size="md" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCode} size="md" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects