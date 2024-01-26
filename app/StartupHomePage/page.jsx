import React from 'react'
import styles from "../StartupHomePage.module.css"
import Image from 'next/image'
import Navbar from '../components/navbarHome'

function Hero() {
    return (
      <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
              <h1 className={styles.heroTitle}>Find Interns for <br /> Your Startup now!</h1>
              <p className={styles.heroDescription}>Hire short term, competent interns for your startup now at Robin internships!</p>
              <div className={styles.heroButton}>
                <button className="btn bg-blue-400 text-white border-opacity-0 hover:bg-accent w-72 ">Get Started</button>
              </div>
              
          </div>
          <div className={styles.heroImageContainer}>
              <Image className={styles.heroImage} src="/startupHomeFirst.jpeg" width={800} height={1000}></Image>
          </div>
      </div>
    )
  }

function Stats(){
    return(
        <div className={styles.statsContainer}>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Startup Success Stories</p>
                    <h2 className={styles.infoTitle}>203</h2>
                </div>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Current Success Rate</p>
                    <h2 className={styles.infoTitle} style={{paddingLeft:"48px"}}>97.7%</h2>
                </div>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Total Interns Hired</p>
                    <h2 className={styles.infoTitle} style={{paddingLeft:"40px"}}>214</h2>
                </div>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>% Interns Satisfied</p>
                    <h2 className={styles.infoTitle} style={{paddingLeft:"30px"}}>90.4%</h2>
                </div>
        </div>
    )
}

function Information1(){
    return(
        <div className={styles.informationContainer}>
            <div className={styles.informationImageContainer}>
                <Image src="/startupHomeSecond.jpeg" width={500} height={450} />
            </div>
            <div className={styles.informationTextContainer}>
                <h2 className={styles.informationTitle}>Robin Internships: Empowering Startups</h2>
                <p className={styles.informationDescription}>Robin Internships is the platform for startups to find talented interns. Find the right interns for roles that don't require hand holding from the founding team!</p>
                <div className={styles.informationButton}>
                 <button className="btn bg-blue-400 text-black font-black border-opacity-0 hover:bg-accent w-64 text-lg ">Join Now!</button>
                </div>
            </div>
        </div>
    )
}

function Sustainable(){
    return(
        <div className={styles.sustainableContainer}>
            <h1 className={styles.sustainableTitle}>Sustainable Hiring</h1>
            <p className={styles.sustainableDescription}>Robin Internships organisations can<br /></p>
            <p className={styles.sustainableDescription}>hire interns to fill in any roles and also</p>
            <p className={styles.sustainableDescription}>to work for any range of tenures.</p>
            <div className='pt-14'>
                <button className="btn bg-blue-400 text-black font-black border-opacity-0 hover:bg-accent w-64 text-md ">Join Now!</button>
            </div>
            
        </div>
    )
}

function TrustedBy(){
    return(
        <div className={styles.trustedByContainer}>
            <h1 className={styles.trustedByTitle}>Trusted By</h1>
            <div className={styles.trustedByLogoContainer}>
                <div className = {styles.logoContainer}>
                    <h2 className={styles.logoImage}>102</h2>
                </div>
                <div className = {styles.logoContainer}>
                    <h2 className={styles.logoImage}>102</h2>
                </div>
                <div className = {styles.logoContainer}>
                    <h2 className={styles.logoImage}>102</h2>
                </div>
                <div className = {styles.logoContainer}>
                    <h2 className={styles.logoImage}>102</h2>
                </div>
            </div>
        </div>
    )
}

function StartupHomePage(){
    return(
        <>
            <Navbar />
            <Hero />
            <Stats /> 
            <Information1 />
            <Sustainable />
            <TrustedBy />
        </>
    )
}

export default StartupHomePage;