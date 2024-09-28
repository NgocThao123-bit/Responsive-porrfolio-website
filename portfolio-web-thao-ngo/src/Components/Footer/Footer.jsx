import React from 'react'
import FooterCSS from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <>
    <section>
      <div className={FooterCSS.footer}>
            <div className={FooterCSS.links}>
                  <h1>Thao Ngo</h1>
                  <p>Lorem ipsum dolor sit amet.</p>

                  <div className={FooterCSS.social}>
                  <i class="ri-facebook-circle-line"></i>
                  <i class="ri-linkedin-box-line"></i>
                  <i class="ri-instagram-line"></i>
                  <i class="ri-github-line"></i>
                  </div>
            </div>
            <div className={FooterCSS.links}>
                  <h3>Useful Links</h3>
                  <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Contact</a></li>
                  </ul>
            </div>
            <div className={FooterCSS.links}>
                  <h3>Information</h3>
                  <ul>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Privacy & Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                  </ul>
            </div>
      </div>
    </section>
    </>
  )
}
