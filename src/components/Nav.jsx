import React from "react";

import { useRef, useLayoutEffect } from "react";
import '/src/Nav.css'
import { TweenMax, Power3 } from "gsap";
import { gsap } from "gsap";
export default function Nav(){
    const butts = document.querySelector('.first')
    const logo = document.querySelector('.logo')
    let app = useRef();
    let links = useRef();
    useLayoutEffect(()=>{
        gsap.context(()=>{
            gsap.to('.logo', .9, {opacity:1, y: 0, ease: Power3.easeOut})
            gsap.to('.nav-links' , .9, {opacity:1, y: 0, ease: Power3.easeOut, delay: .2})
        },app)
    },[])
    return(
        <>
            <nav ref={app} className='nav-girl'>
                <div className="logo">Selecao</div>
                <div className="nav-links" >
                    <p className="first" ref={links}>Home</p>
                    <p className="other">About</p>
                    <p className="other">Portfolio</p>
                    <p className="other">Pricing</p>
                    <p className="other">Services</p>
                    <p className="other">Team</p>
                    <p className="other">Drop Down</p>
                    <p className="other">Contact</p>
                </div>
            </nav>
        </>
    )
}