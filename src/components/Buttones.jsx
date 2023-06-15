import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Buttones(){
    const beten = useRef([])
    const buttonData = [
        {id: 1, text: 'Lorem Ipsum',  icon: <svg width="800px" height="800px" viewBox="-2 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-262.000000, -5199.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M210,5053 L210,5047 C210,5044.334 212,5043 213.999,5043 L214.001,5043 C216,5043 218,5044.334 218,5047 L218,5053 L210,5053 Z M220,5053 L220,5047 C220,5043.447 217.632,5041.475 215,5041.079 L215,5039 L213,5039 L213,5041.079 C210.368,5041.475 208,5043.447 208,5047 L208,5053 L207,5053 C206.448,5053 206,5053.448 206,5054 L206,5054 C206,5054.552 206.448,5055 207,5055 L211,5055 L211,5058 C211,5058.552 211.448,5059 212,5059 C212.552,5059 213,5058.552 213,5058 L213,5055 L215,5055 L215,5058 C215,5058.552 215.448,5059 216,5059 C216.552,5059 217,5058.552 217,5058 L217,5055 L221,5055 C221.552,5055 222,5054.552 222,5054 L222,5054 C222,5053.448 221.552,5053 221,5053 L220,5053 Z" id="charger-[#673]">
    </path>
                </g>
            </g>
        </g>
    </svg>, p: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', col: 'gray'},
    {id: 2, text: 'Dolor Sitema',icon: <svg width="800px" height="800px" viewBox="-0.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -640.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M326.111111,497 L340.888889,497 L340.888889,495 L326.111111,495 L326.111111,497 Z M330.333333,492 L336.666667,492 L336.666667,488 L330.333333,488 L330.333333,492 Z M328.222222,494 L338.777778,494 L338.777778,486 L328.222222,486 L328.222222,494 Z M326.111111,485 L340.888889,485 L340.888889,483 L326.111111,483 L326.111111,485 Z M324,482 L343,482 L343,480 L324,480 L324,482 Z M324,500 L343,500 L343,498 L324,498 L324,500 Z" id="cover_flow-[#1412]">

</path>
            </g>
        </g>
    </g>
</svg>, p: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'},
    {id: 3, text: 'Sed ut perspiciatis' , icon: <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -4559.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M384,4409.21042 C384,4395.56571 364,4395.62738 364,4409.21042 L364,4415.08417 L366,4415.08417 L366,4409.21042 C366,4398.44188 382,4398.44188 382,4409.21042 C382,4409.21042 382,4398.44188 382,4409.21042 L382,4415.08417 L384,4415.08417 L384,4409.21042 Z M374,4408.23146 C372.895,4408.23146 372,4409.10763 372,4410.18938 L372,4412.14729 L372,4414.10521 L372,4419 L374,4419 L376,4419 L376,4414.10521 L376,4412.14729 L376,4410.18938 C376,4409.10763 375.105,4408.23146 374,4408.23146 L374,4408.23146 Z M380,4409.21042 L380,4409.21042 L380,4415.08417 L378,4415.08417 L378,4409.21042 C378,4404.31563 378,4409.21042 378,4409.21042 C378,4404.31563 370,4404.31563 370,4409.21042 L370,4415.08417 L368,4415.08417 L368,4409.21042 C368,4401.37876 380,4401.37876 380,4409.21042 L380,4409.21042 Z" id="click_touch_press-[#811]">
    
    </path>
                </g>
            </g>
        </g>
    </svg>, p: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'},
    {id: 4, text: 'Magni Dolores', icon: 
    <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -1799.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M176,1649.0005 C176,1648.4485 176.448,1648.0005 177,1648.0005 C177.552,1648.0005 178,1648.4485 178,1649.0005 C178,1650.3235 176,1650.3215 176,1649.0005 L176,1649.0005 Z M172.518,1649.0005 L175.354,1653.0005 L176.75,1651.0005 L180,1655.0005 L168,1655.0005 L172.518,1649.0005 Z M182,1657.0005 L166,1657.0005 L166,1641.0005 L171.416,1641.0005 L173.374,1645.0005 L182,1645.0005 L182,1657.0005 Z M174.437,1643.0005 L172.437,1639.0005 L164,1639.0005 L164,1659.0005 L184,1659.0005 L184,1643.0005 L174.437,1643.0005 Z" id="directory_image-[#1627]">
    
    </path>
                </g>
            </g>
        </g>
    </svg>, p: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
    {id: 5, text: 'Nemo Enim', icon: 
    <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -919.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M342,762.926 L334,769.953 L326,762.916 L326,761 L342,761 L342,762.926 Z M326,777 L326,765.58 L334,772.615 L342,765.588 L342,777 L326,777 Z M324,779 L344,779 L344,759 L324,759 L324,779 Z" id="email-[#1571]">
    
    </path>
                </g>
            </g>
        </g>
    </svg>, p: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'},
    {id: 6, text: 'Eiusmod Tempor', icon: 
    <svg width="800px" height="800px" viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        
    
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-383.000000, -1959.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M339,1803 L338,1803 L338,1805 L330,1805 L330,1803 L329,1803 L329,1817 L339,1817 L339,1803 Z M332,1803 L336,1803 L336,1801 L332,1801 L332,1803 Z M341,1801 L341,1819 L327,1819 L327,1801 L330,1801 L330,1799 L338,1799 L338,1801 L341,1801 Z M336.121,1807.172 L337.536,1808.586 L333.293,1812.828 C331.85,1811.385 332.322,1811.858 330.464,1810 L331.879,1808.586 L333.293,1810 L336.121,1807.172 Z" id="fileboard_done-[#1583]">
    
    </path>
                </g>
            </g>
        </g>
    </svg>, p: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'},

    ]
    useEffect(()=>{
        beten.current.forEach((item)=>{
            gsap.fromTo(item, 0.9, {opacity: 0, y: 20, ease: Power3.easeOut, stagger: .2, scale: 0.2},{opacity: 1, y: 0, ease: Power3.easeOut, scale: 1, scrollTrigger: {
                trigger: item, stagger: 0.2
            }})
        })
    },[])
    return(
<div className="buttones-wrape" >
{buttonData.map((item)=>(
    <button className="buttones" key={item.id} ref={(el)=>{beten.current[item.id]=el}}>
        <div className="svglor">    
        {item.icon}
        </div>
        <div className="two-texts">
        <h1>
            {item.text}<break/>
            </h1>
        <p>
            {item.p}
            </p>
        </div>
    </button>
))}
</div>)}