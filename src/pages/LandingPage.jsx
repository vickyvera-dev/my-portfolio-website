import React from 'react'
import Navbar from '../components/nav/Navbar'
import Homes from '../components/home/Homes'
import Abouts from '../components/about/Abouts'
import Skill from '../components/skills/Skill'
import Portfolios from '../components/portfolioprojects/Portfolios'
import MyServices from '../components/service/MyServices'
import ContactMe from '../components/contact/ContactMe'

export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <section id="home">
        <Homes/>
      </section>
      <section id="about"> 
        <Abouts/>
      </section>
      <section id="skills">
  <Skill/>
      </section>
      <section id="portfolio">
        <Portfolios/>
      </section>
      <section id="services">
        <MyServices/>
      </section>
      <section>
        <ContactMe/>
      </section>
    </div>
  )
}
