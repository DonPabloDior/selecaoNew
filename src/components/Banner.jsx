import React, { useRef } from "react";

import { gsap } from 'gsap';
import { useLayoutEffect } from "react";
import { Power3 } from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function Banner(){
  let ban = useRef();
  let allban = useRef()
  useLayoutEffect(()=>{
    gsap.context(()=>{
      gsap.fromTo('.words', .9, {opacity:0, y: -20, ease: Power3.easeOut},{opacity:1, y: 0, ease: Power3.easeOut})
      gsap.fromTo('.pishka', .9, {opacity:0, ease: Power3.easeOut},{opacity:1, delay:0.3, ease: Power3.easeOut})
      gsap.fromTo('.buttonNav', .8, {opacity:0, y: 30, ease: Power3.easeOut},{opacity:1, y: 0, ease: Power3.easeOut, delay: 0.5})
      
    },ban)
  },[])


;
    return(
        <div className="banner-wrap" ref={ban}>
        <div className="banner" ref={allban}>
            <div className="words" >
            <h1 className="wave-word" >Welcome to Selecao</h1>
            <h1 className="wave-animation" >Welcome to Selecao</h1>
            </div>
            <p className="pishka">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
            <button className="buttonNav">Read more</button>
        </div>
        </div>
    )
}