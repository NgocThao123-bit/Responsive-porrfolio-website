import React from 'react'
import PersonalSkillCSS from '../PersonalSkills/PersonalSkill.module.css'
import SoftwareItem1 from './../../assets/brand-1.png'
import SoftwareItem2 from './../../assets/brand-2.png'
import SoftwareItem3 from './../../assets/brand-3.png'
import SoftwareItem4 from './../../assets/brand-4.png'
import SoftwareItem5 from './../../assets/brand-5.png'
import SoftwareItem6 from './../../assets/brand-6.png'
export default function PersonalSkill() {
      return (
            <>
                  <div className={PersonalSkillCSS.banner}>
                        <div className={PersonalSkillCSS.slider} style={{"--quantity": 8}}>
                              <div className={PersonalSkillCSS.item} style={{"--position": 1}}>
                                    <img src={SoftwareItem1} alt="skill1" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 2}}>
                                    <img src={SoftwareItem2} alt="skill2" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 3}}>
                                    <img src={SoftwareItem3} alt="skill3" />                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 4}}>
                                    <img src={SoftwareItem4} alt="skill4" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 5}}>
                                    <img src={SoftwareItem5} alt="skill5" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 6}}>
                                    <img src={SoftwareItem6} alt="skill6" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 7}}>
                                    <img src={SoftwareItem1} alt="skill7" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 8}}>
                                    <img src={SoftwareItem5} alt="skill8" />
                              </div>
                              {/* <div className={PersonalSkillCSS.item} style={{"--position": 9}}>
                                    <img src={SoftwareItem6} alt="skill9" />
                              </div>
                              <div className={PersonalSkillCSS.item} style={{"--position": 10}}>
                                    <img src={SoftwareItem1} alt="skill10" />
                              </div> */}

                        </div>
                        <div className={PersonalSkillCSS.content}>
                              <h1 data-content='MY SKILLS'>MY SKILLS</h1>
                              <div className={PersonalSkillCSS.author}>
                                    <h2>Full Stack</h2>
                                    <p><b>Web Design</b></p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quis adipisci cupiditate!</p>

                              </div>
                              <div className={PersonalSkillCSS.model}></div>
                        </div>
                  </div>
            </>
      )
}
