import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer className="footer p-10 bg-white text-black">
        <aside>
         <Image className = " rounded-xl" src = "/logo.jpeg" width={130} height={130} />
        </aside> 
        <nav>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact US</a>
        </nav> 
        <nav>
            <header className="footer-title">Socials</header> 
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">X</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Linkedin</a>
        </nav> 
        <nav>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
    </footer>
    </>
  )
}

export default Footer