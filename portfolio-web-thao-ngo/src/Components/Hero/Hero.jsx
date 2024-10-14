import React from 'react'
import hero from '../Hero/Hero.module.css'
import img1 from '../../assets/Backgound/lavender1.png'
import img2 from '../../assets/Backgound/lavender4.png'
import img3 from '../../assets/Backgound/lavender5.png'
import img4 from '../../assets/Backgound/lavender6.png'
export default function Hero() {
      return (
            <>
                  <div className={hero.parallax_wrapper}>
                        <div className={`${hero.parallax_group} ${hero.intro_screen} `} id={hero.intro}>

                              Lorem ipsum dolor sit amet consectetur adipisicing elit.

                        </div>


                        <div className={hero.parallax_group} id={hero.group_1}>
                              <div className={`${hero.parallax_layer} ${hero.base_layer}`}>
                                    

                              </div>
                              <div className={`${hero.parallax_layer} ${hero.mid_layer}`}>
                                    
                              </div>
                              <div className={`${hero.parallax_layer} ${hero.top_layer}`}>
                                    

                                    </div>
                        </div>

                        {/* <div className={hero.parallax_group} id={hero.group_2}>
                              <div className={`${hero.parallax_layer} ${hero.mid_layer}`}>
                                    
                              </div>
                              <div className={`${hero.parallax_layer} ${hero.top_layer}`}>
                                    

                              </div>
                        </div> */}

                        <div className={`${hero.parallax_group} ${hero.outro_screen} `} id={hero.outro} >

                              The end

                        </div>


                  </div>

            </>

      )
}
