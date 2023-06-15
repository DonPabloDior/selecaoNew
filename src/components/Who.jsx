import React from "react";
import '/src/Who.css'
import { useRef, useEffect} from 'react'
import gsap from 'gsap'
import { Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Who(){
    const fadeIn = useRef();
    const trig = useRef();
    useEffect(()=>{
        gsap.context(()=>{

            gsap.fromTo('.lol', 1.1,  {opacity: 0, x:-30 , ease: Power3.easeOut, scale: 1.3},{opacity: 1, x: 0, ease: Power3.easeOut,scale: 1, scrollTrigger:{
                trigger: trig.current}})
            gsap.fromTo('.wwa', 1.1,  {opacity: 0, x:-30 , ease: Power3.easeOut, scale: 1.3},{opacity: 1, x: 0, ease: Power3.easeOut,scale: 1, scrollTrigger:{
                trigger: trig.current}})
            gsap.fromTo('.wrap', 1.1,  {opacity: 0, y:20 , ease: Power3.easeOut},{opacity: 1, y: 0, ease: Power3.easeOut, scrollTrigger:{
                trigger: trig.current}, delay: .4})
        }, fadeIn) 
    },[])
    return(
    <div className="cont" >
        <div className="wraperson"
        ref={fadeIn}>

        <p className="lol" >About</p>
        <h1 className="wwa">Who we are</h1>
        <div className="wrap">
            <div className="w1">            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, unde animi quasi earum ab, commodi at deserunt aliquam id nemo dolor ut esse necessitatibus error consequatur.</p>
            <ul>
                <div className="svgs"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6" stroke="#ef6603" stroke-width="2" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87441 15.7802L11.603 17.163C12.4588 17.8477 13.7063 17.716 14.4003 16.8678L22.774 6.63327C23.1237 6.20582 23.0607 5.5758 22.6332 5.22607C22.2058 4.87635 21.5758 4.93935 21.226 5.36679L12.8524 15.6013L11.141 14.2322L9.87441 15.7802Z" fill="#ef6603"/>
                </svg>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li></div>
                <div className="svgs" ref={trig}>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6" stroke="#ef6603" stroke-width="2" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87441 15.7802L11.603 17.163C12.4588 17.8477 13.7063 17.716 14.4003 16.8678L22.774 6.63327C23.1237 6.20582 23.0607 5.5758 22.6332 5.22607C22.2058 4.87635 21.5758 4.93935 21.226 5.36679L12.8524 15.6013L11.141 14.2322L9.87441 15.7802Z" fill="#ef6603"/>
                </svg><li>Duis aute irure dolor in reprehenderit in voluptate velit</li>

                </div>
                <div className="svgs">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6" stroke="#ef6603" stroke-width="2" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87441 15.7802L11.603 17.163C12.4588 17.8477 13.7063 17.716 14.4003 16.8678L22.774 6.63327C23.1237 6.20582 23.0607 5.5758 22.6332 5.22607C22.2058 4.87635 21.5758 4.93935 21.226 5.36679L12.8524 15.6013L11.141 14.2322L9.87441 15.7802Z" fill="#ef6603"/>
                </svg><li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>

                </div>
            </ul></div>
            
            <div className="w2">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <button>Learn More</button>
            </div>

        </div>
        </div>
    </div>      
    )
}