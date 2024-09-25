import React from 'react'
import ServicesCSS from './../Services/Services.module.css'
export default function Services() {
      return (
            <>
                  <section id='service'>
                        <div className={ServicesCSS.service}>
                              <h2>Service</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro culpa maxime!</p>

                              <div className={ServicesCSS.service_cards}>
                                    <div className={ServicesCSS.Service_card}>
                                          <i className="ri-terminal-window-fill" id={ServicesCSS.icon}></i>
                                          <h3>Web Design</h3>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro exercitationem repellat distinctio praesentium alias, culpa nisi quis illum quidem minus.</p>

                                          <a href="#">
                                                Read More <i className='ri-arrow-right-double-line'></i>
                                          </a>
                                    </div>
                                    <div className={ServicesCSS.Service_card}>
                                          <i className="ri-brush-fill" id={ServicesCSS.icon}></i>
                                          <h3>UI / UX Design</h3>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro exercitationem repellat distinctio praesentium alias, culpa nisi quis illum quidem minus.</p>

                                          <a href="#">
                                                Read More <i className='ri-arrow-right-double-line'></i>
                                          </a>
                                    </div>
                                    <div className={ServicesCSS.Service_card}>
                                          <i className='ri-reserved-line' id={ServicesCSS.icon}></i>
                                          <h3>Web Development</h3>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro exercitationem repellat distinctio praesentium alias, culpa nisi quis illum quidem minus.</p>

                                          <a href="#">
                                                Read More <i className='ri-arrow-right-double-line'></i>
                                          </a>
                                    </div>
                                    <div className={ServicesCSS.Service_card}>
                                          <i id={ServicesCSS.icon} className='ri-bug-line'></i>
                                          <h3>Live Debugging</h3>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro exercitationem repellat distinctio praesentium alias, culpa nisi quis illum quidem minus.</p>

                                          <a href="#">
                                                Read More <i className='ri-arrow-right-double-line'></i>
                                          </a>
                                    </div>
                                    <div className={ServicesCSS.Service_card}>
                                          <i className='ri-voice-recognition-line' id={ServicesCSS.icon}></i>
                                          <h3>Web Development</h3>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro exercitationem repellat distinctio praesentium alias, culpa nisi quis illum quidem minus.</p>

                                          <a href="#">
                                                Read More <i className='ri-arrow-right-double-line'></i>
                                          </a>
                                    </div>
                                    <div className={ServicesCSS.Service_card}>
                                          <i className='ri-box-1-line' id={ServicesCSS.icon}></i>
                                          <h3>Live Debugging</h3>
                                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro exercitationem repellat distinctio praesentium alias, culpa nisi quis illum quidem minus.</p>

                                          <a href="#">
                                                Read More <i className='ri-arrow-right-double-line'></i>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      )
}
