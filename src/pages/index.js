import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

// data


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Design by Kevin Chisaki</title>
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
        <div class="intro">
          <h1>Hi, I’m Kevin Chisaki!</h1>
          <h3>
          A product designer based in the Bay Area.<br></br>
          I’m passionate about everything design, the gaming community, and coffee!<br></br>
          Currently a product designer at <a href="https://www.trov.com/" target="_blank" class="trov-color link">Trov</a> disrupting the insurance industry.
          </h3>
        </div>
        <ul class="portfolioString">
          <li>
              <Link to="/mytrov-web" className="portfolioLink">
                <StaticImage src="../images/Trov-Hero.png" alt=""
                  placeholder="blurred"
                  layout="constrained"
                  width={2880}
                  height={1080}
                  className="portfolioHero"
                />
                <h2>MyTr&#333;v Web</h2>
                <h5>2016-2017</h5>
              </Link>
            </li>
            <li>
              <Link to="/ditto-bot" className="portfolioLink">
                <StaticImage src="../images/Discord-Hack-Hero.png" alt=""
                  placeholder="blurred"
                  layout="constrained"
                  width={2880}
                  height={1080}
                  className="portfolioHero"
                />
                <h2>Ditto Bot! Discord Hack Week</h2>
                <h5>Passion Project, 2019</h5>
              </Link>
            </li>
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
