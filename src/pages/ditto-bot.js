import * as React from "react"
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/case-study'

// data
import dittoEmoji from '../images/ditto-bot/ditto.gif'

// markup
const dittoPage = () => {
  return (
    <Layout pageTitle="Kevin Chisaki — MyTrov Web">
      <div class="studyHeader">
      <StaticImage src="../images/ditto-bot/ditto-bot_cs-hero.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={3960}
          height={1080}
          className=""
      />
      </div>
      <div class="container">
        <h1>Ditto Bot! Discord Hack Week 2019</h1>
        <h4 class="ditto-color">Summer 2019</h4>
      </div>
      <div class="container studyInfo">
        <div class="info">
          <h4 class="ditto-color">Timeline</h4>
          <h3>June 24th - 28th 2019</h3>
        </div>
        <div class="info">
          <h4 class="ditto-color">Role</h4>
          <h3>Lead UI/UX Designer<br></br>Web Designer</h3>
        </div>
        <div class="info">
          <h4 class="ditto-color">Team</h4>
          <h3>1 Designer<br></br>2 Engineers</h3>
        </div>
      </div>
      <div class="container">
        <h1>Background &amp; Task</h1>
        <p class="cs-beta">Discord had their first ever hack week in 2019. It was a one week time period from June 24th - 28th. There were ten categories to participate in. Separated into two meta categories — Bots and Creative. Bots are an important part of Discord’s ecosystem and are powerful tools to help automate any server. So my team developed a bot for the “Productivity” category in hopes to make an impact.<br></br>
        <br></br>
        To see the full rules we had to follow, <a href="https://blog.discord.com/discord-community-hack-week-build-and-create-alongside-us-6b2a7b7bba33" target="_blank" class="ditto-color link">view Discord’s blog post here</a>.</p>
        <StaticImage src="../images/ditto-bot/ditto-1.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={1920}
          height={720}
          className="img-alpha"
        />
        <h1>Searching for media sucks...</h1>
        <p class="cs-beta">Media files, photos, and documents get lost in discord chats pretty easily. Sure, there is a “pinned” section but specific files can still be hard to find. Making a new channel for media might be a good idea if it’s well organized. Then again, looking for something specific is still hard when it’s lost in a sea of messages and are all named image1.jpg.</p>
        <StaticImage src="../images/ditto-bot/ditto-2.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={1920}
          height={678}
          className="img-alpha"
        />
        <h1>The Solution</h1>
        <p class="cs-beta">What if there was a bot that can copy, tag, and store your media? All your tagged photos and documents can be referenced to share with everyone in chat.</p>
        <StaticImage src="../images/ditto-bot/ditto-3.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={1920}
          height={1184}
          className="img-beta"
        />
        <h6>How to save something</h6>
        <p>React with a ditto emoji <img src={dittoEmoji} alt="" class="ditto-emoji"/> and ditto bot will prompt a question.<br></br>“What library do you want to save this photo in?</p>
        <StaticImage src="../images/ditto-bot/ditto-4.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={1920}
          height={886}
          className="img-beta"
        />
        <h6>Libraries</h6>
        <p>Ditto Bot will ask whether to add it to an existing library or make a new one. Simply type an existing name or make a new library and ditto will add it to it’s respective library.</p>
        <StaticImage src="../images/ditto-bot/ditto-5.png" alt=""
          placeholder="blurred"
          layout="constrained"
          width={1920}
          height={1002}
          className="img-beta"
        />
        <h6>Referencing Libraries</h6>
        <p>To reference a library, typing command -------- will bring up a post in the chat for everyone to see and share. Users can scroll through the library together using the arrow emojis on the bottom of the bot post.</p>
        
        <h1 class="cs-alpha">Design Challenges</h1>
        <p class="cs-beta">File storage was definitely a challenge to think about. For a hack-a-thon this wasn’t an urgent question to address since we can store it on a small server. But if this bot were to ever gain traction and be used by hundreds of people, storage would be a problem.</p>
        
        <h1 class="cs-alpha">Conclusion &amp; Results</h1>
        <p class="cs-beta">Our team did not win any prizes or honorable mentions. You can view the actual winners here. But we did learn a lot about what it takes to work remotely with people and be efficient with a small team. We all exchanged contact information and keep in touch till this day. I really enjoyed my experience with this event and hope to participate in more hack-a-thons in the future. :)<br></br>
        <br></br>View our <a href="#" target="_blank" class="ditto-color link">Github page!</a></p>

        <h1 class="cs-alpha">My Teammates</h1>
        <p class="cs-beta">A lot of my friends aren’t engineers, so I looked for teammates in Discord’s official hack week server. I created a quick pitch deck and spammed the “L4G” (Looking for group) channel and found 2 awesome developers who wanted to help me. Finding teammates and working together from across the world was an amazing experience. I would definitely do it again.<br></br>
        <br></br>Shout out to my teammates/devs!
        <br></br><a href="" target="_blank" class="ditto-color link">Arin “ArgonArcher” Greenwood</a>
        <br></br><a href="" target="_blank" class="ditto-color link">Brennen “Drey” Green</a></p>

      </div>
    </Layout>
  )
}

export default dittoPage
