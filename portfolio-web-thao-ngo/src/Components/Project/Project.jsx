import React from 'react'
import ProjectCSS from '../Project/Project.module.css'
import project1 from '../../assets/Project/project1.png'
import project2 from '../../assets/Project/project2.png'
import project3 from '../../assets/Project/project3.png'
import project4 from '../../assets/Project/project4.png'
export default function Project() {
      return (
            <>
                  <section>
                        <div className={ProjectCSS.project}>
                              <h2>Project title</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta quibusdam nihil!</p>
                              <div className={ProjectCSS.project_cards}>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project1} alt="project1" />

                                          <div>
                                                <h4>Web Development</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut possimus iusto.</p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project2} alt="project2" />

                                          <div>
                                                <h4>Web Development</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut possimus iusto.</p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project3} alt="project3" />

                                          <div>
                                                <h4>Web Development</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut possimus iusto.</p>
                                                <a href="#">
                                                      Read More <i className='ri-arrow-right-double-line'></i>
                                                </a>
                                          </div>
                                    </div>
                                    <div className={ProjectCSS.project_card}>
                                          <img src={project4} alt="project4" />

                                          <div>
                                                <h4>Web Development</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut possimus iusto.</p>
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
