import React from 'react'
import styles from "../LandingPage.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbarHome'

function Hero() {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>Start Your Journey: Find Internships that don't require WorkEx</h1>
            <p className={styles.heroDescription}>We're dedicated to empowering your career growth.</p>
        </div>
        <div className={styles.heroImageContainer}>
            <Image src="/logo.jpeg" width={700} height={700}></Image>
        </div>
    </div>
  )
}

function Mission(){
    return(
        <div className={styles.missionContainer}>
            <h2 className={styles.missionTitle}>
                Our Mission
            </h2>
            <div className={styles.missionDescription}>
               <p style={{paddingLeft:"100px"}}>We believe in providing internships to <i><strong>students</strong></i> to help start off with their interning journey.<br /></p>
               <p style={{paddingLeft:"80px"}}>We believe in finding competent interns for <i><strong>startups</strong></i> that could use short term responsible help.<br /></p>
               <p style={{paddingLeft:"140px"}}>We believe in aiding <i><strong>colleges</strong></i> upskill their students and making them hire-able</p>
            </div>
            <Image src = "/OurMission.jpeg" className={styles.missionImage} width={700} height = {500} />
   
            <div className={styles.missionInfoContainer}>
                <div className = {styles.infoItem}>
                    <h2 className={styles.infoTitle}>2000</h2>
                    <p className={styles.infoDescription}> internships completed</p>
                </div>
                <div className = {styles.infoItem}>
                    <h2 className={styles.infoTitle}>1000</h2>
                    <p className={styles.infoDescription}>interns have joined</p>
                </div>
                <div className = {styles.infoItem}>
                    <h2 className={styles.infoTitle}>100</h2>
                    <p className={styles.infoDescription}>startups have joined</p>
                </div>
            </div>
    </div>
    )
}

function Start(){
    return(
        <div className={styles.startContainer}>
            <h1 className={styles.startTitle}>Start Your Journey Now!</h1>
            <div className={styles.startButtonsContainer}>
                <Link href = "/signup" className="btn bg-white text-black hover:bg-blue-400 hover:text-white w-60">Start Now</Link>
                <div className="btn bg-white text-black hover:bg-blue-500  hover:text-white w-60">Contact Us</div>
            </div>
    
        </div>
    )
}


function LandingPage(){
    return(
        <>
            <Navbar />
            <Hero />
            <Mission />
            <Start />
        </>
    )
}

export default LandingPage