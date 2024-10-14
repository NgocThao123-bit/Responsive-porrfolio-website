import React from 'react'
import ProjectCSS from '../Project/Project.module.css'
import project1 from '../../assets/Project/project1.png'
import project2 from '../../assets/Project/project2.png'
import project3 from '../../assets/Project/project3.png'
import project4 from '../../assets/Project/project4.png'
export default function Project() {
      return (
            <>
                  <section id='projects'>
                        <div className={ProjectCSS.project}>
                              <h2>Project</h2>
                              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta quibusdam nihil!</p> */}
                              <div className={ProjectCSS.project_cards}>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project1} alt="project1" />

                                          <div>
                                                <h4>Real Estate Website</h4>
                                                <p>Developed and implemented a full-stack web-based online marketplace for real estate sales, rental listings
                                                      and bookings with search capability across multiple world-wide locations.</p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project2} alt="project2" />

                                          <div>
                                                <h4>Online Gaming Website</h4>
                                                <p>Developed and implemented a full-stack web-based online marketplace for game online </p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project3} alt="project3" />

                                          <div>
                                                <h4>Invoice Tracking Application</h4>
                                                <p>Developed remote enabled administration screens and functions for the database management. 
                                                </p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project4} alt="project4" />

                                          <div>
                                                <h4>Coffee Shop Website</h4>
                                                <p>Developed the Client front-end user-interface screens and logic
                                                      using React-JS, Material-UI, Bootstrap UI,
                                                      Axios. and JavaScript.
                                                      Developed REST API Back End Express NodeJS server connecting to
                                                      a Microsoft SQL Server as the local database.
                                                </p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </section>

            </>
      )
}
