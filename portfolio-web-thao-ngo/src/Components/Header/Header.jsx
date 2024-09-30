import React, { } from 'react'
import headerCSS from './../Header/Header.module.css'
import SoftwareItem1 from './../../assets/brand-1.png'
import SoftwareItem2 from './../../assets/brand-2.png'
import SoftwareItem3 from './../../assets/brand-3.png'
import SoftwareItem4 from './../../assets/brand-4.png'
import SoftwareItem5 from './../../assets/brand-5.png'
import SoftwareItem6 from './../../assets/brand-6.png'
import HeroImg from './../../assets/Girl.png'
import elementImg from './../../assets/decorate.png'
export default function Header() {
      return (
            <div className={headerCSS.header_wrapper}>
                  <div className={headerCSS.header_content}>
                        <small>Hello✌️ I am Thao</small>
                        <h2> FullStack <span>Software developer</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quos error officiis.</p>
                        <div className={headerCSS.header_btns}>
                              <button>Download CV<i className="ri-download-line"></i></button>
                              <button>Hire Me<i className="ri-arrow-right-line"></i></button>
                        </div>
                        <p>2+ Years of Experience with .NET </p>
                        <div className={headerCSS.software}>
                              <div className={headerCSS.software_items}>
                                    <img src={SoftwareItem1} alt="image" />
                              </div>
                              <div className={headerCSS.software_items}>
                                    <img src={SoftwareItem2} alt="image" />
                              </div>
                              <div className={headerCSS.software_items}>
                                    <img src={SoftwareItem3} alt="image" />
                              </div>
                              <div className={headerCSS.software_items}>
                                    <img src={SoftwareItem4} alt="image" />
                              </div>
                              <div className={headerCSS.software_items}>
                                    <img src={SoftwareItem5} alt="image" />
                              </div>
                              <div className={headerCSS.software_items}>
                                    <img src={SoftwareItem6} alt="image" />
                              </div>

                        </div>
                  </div>
                  <div className={headerCSS.header_image}>
                        <img src={HeroImg} alt="hero-image" id={headerCSS.heroImg} />
                        {/* <img src={elementImg} alt="element-image" id={headerCSS.elementImg} /> */}
                  </div>
            </div>
      )
}
