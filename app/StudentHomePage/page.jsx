import React from 'react'
import styles from "../StudentHomePage.module.css"
import Image from 'next/image'
import Navbar from '../components/navbarHome'

function Hero() {
    return (
      <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
              <h1 className={styles.heroTitle}>Start Your Journey: <br /> Find Internships that  <br /> don't require WorkEx</h1>
              <p className={styles.heroDescription}>At Robin internships, you can find a wide range of  internships at startups. These internships do NOT require you to have prior work experience or  technical skill.</p>
              <div className={styles.heroButton}>
                <button className="btn bg-[#2aa4b4] text-white border-opacity-0 hover:bg-accent w-72 ">Get Started</button>
              </div>
              
          </div>
          <div className={styles.heroImageContainer}>
              <Image className={styles.heroImage} src="/studentHomeFirst.jpeg" width={1000} height={1100}></Image>
          </div>
      </div>
    )
  }

function Stats(){
    return(
        <div className={styles.statsContainer}>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Current Hiring entries</p>
                    <h2 className={styles.infoTitle}>102</h2>
                </div>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Current Internship Positions</p>
                    <h2 className={styles.infoTitle} style={{paddingLeft:"62px"}}>7,366</h2>
                </div>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Average intern stipend</p>
                    <h2 className={styles.infoTitle} style={{paddingLeft:"45px"}}>$230</h2>
                </div>
                <div className = {styles.infoItem}>
                    <p className={styles.infoDescription}>Students Who Found Internships</p>
                    <h2 className={styles.infoTitle} style={{paddingLeft:"80px"}}>90.4%</h2>
                </div>
        </div>
    )
}

function Information1(){
    return(
        <div className={styles.informationContainer}>
            <div className={styles.informationImageContainer}>
                <Image src="/studentHomeSecond.jpeg" width={550} height={550} />
            </div>
            <div className={styles.informationTextContainer}>
                <h2 className={styles.informationTitle}>Join the Internship Revolution</h2>
                <p className={styles.informationDescription}>Our platform is tailored for students that are starting off with interning. At Robin internships, find internships that dont always ask you for prior work experience or certifications! </p>
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
            <h1 className={styles.sustainableTitle}>Sustainable Growth Opportunities</h1>
            <p className={styles.sustainableDescription}>Earn stipends and build your <br /></p>
            <p className={styles.sustainableDescription}>resume at the same time!</p>
        </div>
    )
}

function Information2(){
    return(
        <div className={styles.informationContainer}>
            <div className={styles.informationImageContainer}>
                <Image src="/studentHomeThird.jpeg" width={550} height={550} />
            </div>
            <div className={styles.informationTextContainer}>
                <h2 className={styles.informationTitle}>Boost Your Resume</h2>
                <p className={styles.informationDescription}>Our platform is built for students to gain experience through working at startups and also by offering internships in multiple domains for students to boost their resumes!</p>
                <div className={styles.informationButton}>
                 <button className="btn bg-blue-400 text-black font-black border-opacity-0 hover:bg-accent w-64 text-lg ">Join Now!</button>
                </div>
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

function StudentHomePage(){
    return(
        <>
            <Navbar />
            <Hero />
            <Stats /> 
            <Information1 />
            <Sustainable />
            <Information2 />
            <TrustedBy />
        </>
    )
}

export default StudentHomePage;