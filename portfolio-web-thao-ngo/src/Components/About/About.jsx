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
                                    <p>
                                          My name is Thao I  graduated from Saigon International University with a degree in Computer Science.
                                          I currently work for NCS Technologiesm.
                                          <br></br>
                                          I am hardworking, always willing to learn new things,  and I work well with others.
                                          <br></br>
                                          My technical skills include experience with the ASP.NET Framework as well as NODEJS, using  JavaSript p, C Sharp, HTML and CSS.
                                          <br></br>
                                          I am excited about this FullStack .NET developer position because I have a strong passion for .NET technologies and extensive experience in both front-end and back-end development.
                                          I admire NCS's commitment to innovation and quality, and I am eager to contribute to your forward-thinking team.
                                          This role aligns perfectly with my career goals, and I am confident that my skills and enthusiasm for continuous learning will allow me to make meaningful contributions.
                                          <br></br>
                                          My greatest strengths are my proficiency in ASP.NET Core, MVC, Razor Pages, WebAPI, Blazor, and React.
                                          I have a solid understanding of HTML, CSS, and JavaScript, which allows me to build robust and scalable web applications.
                                          My commitment to continuous learning ensures I stay updated with the latest industry trends,
                                          making me well-equipped to tackle various challenges in web development.
                                          <br></br>
                                          When faced with a challenging situation, I prioritize my tasks and break them down into manageable steps.
                                           This helps me stay focused and ensures that I can tackle each part of the problem effectively.
                                    </p>


                                    <button>Download CV</button>
                              </div>
                        </div>
                  </section>
            </>
      )
}
