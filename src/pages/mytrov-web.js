import * as React from "react"
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/case-study'

// data


// markup
const mytrovPage = () => {
  return (
    <Layout pageTitle="Kevin Chisaki — MyTrov Web">
      <div class="studyHeader">
        <StaticImage src="../images/Trov-Hero.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={2880}
          height={1080}
          className=""
        />
      </div>
    </Layout>
  )
}

export default mytrovPage
