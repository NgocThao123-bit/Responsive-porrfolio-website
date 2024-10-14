import React, { useRef } from 'react'
import navCSS from './../Nav/Nav.module.css'
import logo from './../../assets/man.png'
import { Link } from 'react-router-dom';
export default function Nav() {
      const menu = useRef();
      const menuHandler = () => {
            menu.current.classList.toggle(navCSS.ShowNav);
      }

      const Dark = () => {
            document.querySelector('body').setAttribute('data-theme', 'Dark');
      }

      const Light = () => {
            document.querySelector('body').setAttribute('data-theme', 'Light');
      }

      const ThemeHandler = () => {
            if (document.querySelector('body').getAttribute('data-theme') == 'Light') {
                  Dark();
            } else {
                  Light();
            }
      }
      Light();

      return (
            <div className={navCSS.nav_wrapper}>
                  <div className={navCSS.logo}>
                        <a href="#">🥷Thao</a>
                  </div>
                  <ul ref={menu}>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                  </ul>
                  <div className={navCSS.nav_btns}>
                        <button>Hire Me
                              <i className="ri-download-line"></i>
                        </button>
                        <i className="ri-moon-line" id={navCSS.moon} onClick={ThemeHandler}></i>
                        <i className="ri-menu-3-line" id={navCSS.menu} onClick={menuHandler}></i>
                  </div>
            </div>
      )
}
