import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const caseStudy = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <div class="container">
        <nav>
          <Link to="/">Home</Link>
          <ul class="navLinks">
            <li class="navLink">
              <Link to="/about">About</Link>
            </li>
            <li class="navLink">
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
      {children}
      <footer>
        <div class="container footer-links">
          <ul class="socials">
            <li>
              <a href="social-link">
                <StaticImage src="../images/socials/linkedin.svg" alt=""
                    placeholder="blurred"
                    layout="constrained"
                    width={19}
                    height={19}
                    className=""
                />
              </a>
            </li>
            <li class="social-link">
              Github
            </li>
            <li class="social-link">
              Twitch
            </li>
          </ul>
          <h5>Wanna Chat? Hit me up! - <a href="" target="">kevinchisaki@gmail.com</a></h5>
        </div>
      </footer>
    </main>
  )
}
export default caseStudy