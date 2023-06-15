import React from "react";
import Buttones from "./Buttones";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Offer(){
    const offer_wrap = useRef()
    useEffect(()=>{
        gsap.fromTo(offer_wrap.current, 0.9, {opacity: 0 , y: 20, ease: Power3.easeOut},{opacity: 1, y: 0, ease: Power3.easeOut, delay: 0.3, scrollTrigger: {
            trigger: offer_wrap.current
        }})
    },[])
    return(
        <>
        <div className="offer-cont" >
            <div className="offer-wrap" ref={offer_wrap}>
            <p className="lol">Services</p>
        <h1>What we do offer</h1>
        </div>
        <Buttones></Buttones>
        </div>
        </>
    )
}