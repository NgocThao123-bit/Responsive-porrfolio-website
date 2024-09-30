import React from 'react'
import AboutCSS from './../About/About.module.css'
import About_img from './../../assets/About/about2.png'
export default function About() {
      return (
            <>
                  <section id='about'>
                        <div className={AboutCSS.about}>
                              <div className={AboutCSS.about_img}>
                                    <img src={About_img} alt="about_img" />
                              </div>
                              <div className={AboutCSS.about_info}>
                                    <p>About Me</p>
                                    <h2>Thao Ngo</h2>
                                    <h3>Hi I am <span> FullStack </span>Developer </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam culpa quaerat quae.</p>
                                    <button>Download CV</button>
                              </div>
                        </div>
                  </section>
            </>
      )
}
