import React from "react";
import '/src/Buttons.css'
import gsap from "gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)
export default function Buttons(){
    const but = useRef()
    const but2 = useRef()
    const but3= useRef()
    const but4 = useRef()
    const h1shit =useRef()
    const pshit = useRef()
    const img = useRef()
    useEffect(()=>{
        gsap.fromTo(but.current, 0.9,{opacity: 0, y: 20, ease: Power3.easeOut, scale: 0.2},{opacity: 1, y: 0, ease: Power3.easeOut, scale:1, scrollTrigger: {trigger: but.current}})
        gsap.fromTo(but2.current, 0.9,{opacity: 0, y: 20, ease: Power3.easeOut, scale: 0.2},{opacity: 1, scale: 1, y: 0, ease: Power3.easeOut, scrollTrigger: {trigger: but.current}, delay: 0.2})
        gsap.fromTo(but3.current, 0.9,{opacity: 0, y: 20, ease: Power3.easeOut, scale: 0.2},{opacity: 1, scale: 1, y: 0, ease: Power3.easeOut, scrollTrigger: {trigger: but.current}, delay: 0.4})
        gsap.fromTo(but4.current, 0.9,{opacity: 0, y: 20, ease: Power3.easeOut, scale: 0.2},{opacity: 1, scale: 1, y: 0, ease: Power3.easeOut, scrollTrigger: {trigger: but.current}, delay: 0.6})
        gsap.fromTo(h1shit.current, 0.9,{opacity: 0, y: 20, ease: Power3.easeOut},{opacity: 1, y: 0, ease: Power3.easeOut, scrollTrigger: {trigger: pshit.current}})
        gsap.fromTo(pshit.current, 0.9,{opacity: 0, y: 20, ease: Power3.easeOut},{opacity: 1, y: 0, ease: Power3.easeOut, scrollTrigger: {trigger: pshit.current}, delay: 0.2})
        gsap.fromTo(img.current, 0.9,{opacity: 0, x: 20, ease: Power3.easeOut},{opacity: 1, x: 0, ease: Power3.easeOut, scrollTrigger: {trigger: pshit.current}, delay: 0.4})
    },{})
    
    return(
        <div className="contant">
            <div className="wrap-buttons">
                <button className="juno" ref={but}><svg class='icon' width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>arrow_corner [#278]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6919.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M172,6769.586 L176.586,6765 L172,6765 L172,6763 L180,6763 L180,6771 L178,6771 L178,6766.414 L173.414,6771 L172,6769.586 Z M166,6761 L182,6761 L182,6777 L172,6777 L172,6771 L166,6771 L166,6761 Z M164,6779 L184,6779 L184,6759 L164,6759 L164,6779 Z" id="arrow_corner-[#278]">

</path>
            </g>
        </g>
    </g>
</svg>Unde Lposa Mano Kora</button>
                <button className="juno" ref={but2}><svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>bag_circle [#1120]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -3159.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M377.2768,3005.09524 L371.149257,3005.09524 L371.149257,3004.07937 C371.149257,3002.39911 372.52387,3001.03175 374.213029,3001.03175 C375.902188,3001.03175 377.2768,3002.04762 377.2768,3004.07937 L377.2768,3005.09524 Z M381.049324,3007.99962 L381.798927,3013.22222 C382.428021,3012.99162 383.102051,3012.85854 383.808761,3012.84635 L382.945798,3006.83949 C382.801801,3005.83886 381.93986,3005.09524 380.923709,3005.09524 L379.319314,3005.09524 L379.319314,3004.07937 C379.319314,3001.03175 377.028635,2999 374.213029,2999 C371.397423,2999 369.106743,3001.2786 369.106743,3004.07937 L369.106743,3005.09524 L367.814853,3005.09524 C366.797681,3005.09524 365.624256,3005.83886 365.480259,3006.83949 L364.020883,3016.99822 C363.845226,3018.22235 364.800102,3019.31746 366.042972,3019.31746 L377.806833,3019.31746 C377.662835,3019.31746 378.000871,3017.4259 378.021297,3017.28571 L367.220481,3017.28571 C366.599557,3017.28571 366.121609,3016.73816 366.209437,3016.1266 L367.376734,3007.99962 C367.449243,3007.49879 367.880213,3007.12698 368.387778,3007.12698 L369.106743,3007.12698 L369.106743,3009.15873 C369.106743,3009.71949 369.564266,3010.1746 370.128,3010.1746 C370.691734,3010.1746 371.149257,3009.71949 371.149257,3009.15873 L371.149257,3007.12698 L377.2768,3007.12698 L377.2768,3009.15873 C377.2768,3009.71949 377.734323,3010.1746 378.298057,3010.1746 C378.861791,3010.1746 379.319314,3009.71949 379.319314,3009.15873 L379.319314,3007.12698 L380.038279,3007.12698 C380.545844,3007.12698 380.976815,3007.49879 381.049324,3007.99962 L381.049324,3007.99962 Z M383.914971,3020.96825 C382.788525,3020.96825 381.872457,3020.05702 381.872457,3018.93651 C381.872457,3017.816 382.788525,3016.90476 383.914971,3016.90476 C385.041418,3016.90476 385.957486,3017.816 385.957486,3018.93651 C385.957486,3020.05702 385.041418,3020.96825 383.914971,3020.96825 L383.914971,3020.96825 Z M383.914971,3014.87302 C381.659015,3014.87302 379.829943,3016.69244 379.829943,3018.93651 C379.829943,3021.18057 381.659015,3023 383.914971,3023 C386.170928,3023 388,3021.18057 388,3018.93651 C388,3016.69244 386.170928,3014.87302 383.914971,3014.87302 L383.914971,3014.87302 Z" id="bag_circle-[#1120]">

</path>
            </g>
        </g>
    </g>
</svg>Asen astora manura</button>
                <button className="juno" ref={but3}><svg width="800px" height="800px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>chart_fill [#1292]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -2440.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M17.0081791,2288 L23,2288 C23,2283.582 18.9615127,2280 14.9669654,2280 L14.9669654,2286 C14.9669654,2287.105 15.9046854,2288 17.0081791,2288 M15.0109054,2290 L21.0027264,2290 C21.0027264,2294.943 16.5148525,2298.839 11.3998347,2297.844 C8.28508644,2297.238 5.76352847,2294.724 5.15835455,2291.605 C4.16471092,2286.483 7.97650766,2282 12.9696918,2282 L12.9696918,2288 C12.9696918,2289.105 13.9074117,2290 15.0109054,2290" id="chart_fill-[#1292]">

</path>
            </g>
        </g>
    </g>
</svg>Mopi jose noki mera</button>
                <button className="juno" ref={but4}><svg class='iccc'width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>closed_box_top_view [#699]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -5079.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M377,4933 L375,4933 L375,4931 L375,4927 L375,4925 L377,4925 L380,4925 L380,4927 L377,4927 L377,4931 L380,4931 L380,4933 L377,4933 Z M371,4931 L371,4927 L368,4927 L368,4925 L371,4925 L373,4925 L373,4927 L373,4931 L373,4933 L371,4933 L368,4933 L368,4931 L371,4931 Z M366,4937 L382,4937 L382,4921 L366,4921 L366,4937 Z M382,4919 L366,4919 L364,4919 L364,4921 L364,4937 L364,4939 L366,4939 L382,4939 L384,4939 L384,4937 L384,4921 L384,4919 L382,4919 Z" id="closed_box_top_view-[#699]">

</path>
            </g>
        </g>
    </g>
</svg>Conop moniok salors</button>
            </div>
            <div className="paragraph-wraps">
                <div className="wrappy">
                    <h1 ref={h1shit}>
                    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                    </h1>
                    <div ref={pshit}>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
            <ul>
                <div className="svgs"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6" stroke="#ef6603" stroke-width="2" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87441 15.7802L11.603 17.163C12.4588 17.8477 13.7063 17.716 14.4003 16.8678L22.774 6.63327C23.1237 6.20582 23.0607 5.5758 22.6332 5.22607C22.2058 4.87635 21.5758 4.93935 21.226 5.36679L12.8524 15.6013L11.141 14.2322L9.87441 15.7802Z" fill="#ef6603"/>
                </svg>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li></div>
                <div className="svgs">
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
            </ul>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                    </div>
                </div>
                <div className="images" ref={img}>
                    <img src="/src/img/1img.jpg" alt="postal" />
                </div>
            </div>
        </div>
    )
}