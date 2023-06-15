import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function CallToAction(){
    const call_wrap = useRef()
    const call_button = useRef()
    useEffect(()=>{
       gsap.fromTo(call_wrap.current, 0.9, {opacity:0 , x:-20 , ease: Power3.easeOut},{opacity:1 , x:0 , ease: Power3.easeOut, delay: 0.2, scrollTrigger: {trigger:
        call_wrap.current}
       }) 
       gsap.fromTo(call_button.current, 0.9, {opacity:0 , x: 20, ease: Power3.easeOut},{opacity: 1, x: 0, ease: Power3.easeOut, delay: 0.2, scrollTrigger:{
        trigger: call_button.current
    }})
    },[])
    return(
        <div className="wrap-calltoac">
        <div className="call-wrap" ref={call_wrap}>
            <h1 className="h1-cal">Call To Action</h1>
            <p className="p-cal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button className="call-button-wrap" ref={call_button}>
            CALL TO ACTION
        </button>
        </div>
    )
}