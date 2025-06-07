"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

export default function Home() {
  let title = "DIGITAL CRAFTSMAN";
  const letters = title.split('');

  const containerRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(() => {
    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();
    tl1.to(".text", {
      y: "-10px",
      x: "8px",
      duration: 1,
      stagger: 0.03,
      ease: "elastic.out(1.5,0.3)",
    })
    .to(".text", {
      y: "0px",
      x: "0px",
      duration: 0.3,
      stagger: 0.03,
      ease: "power3.out",
      delay: -1
    })
    tl2.to(".appear", {
      opacity: 1,
      duration: 0.1,
      ease: "power4.out",
      stagger: 0.03,
    })
    .to(".appear", {
      opacity: 0,
      duration: 0.2,
      stagger: 0.03,
      ease: "power4.out",
      delay: 0
    })
    gsap.from(".name", {
      y: "100%",
      duration: 0.3,
      ease: "power4.out",
      delay: 0.5
    })

    gsap.fromTo(".popup", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.03,
    });

    gsap.from(".star", {
      opacity: 0,
      rotate: -45,
      duration: 1,
      delay: 0.6,
      ease: "elastic.out(1,0.5)",
      stagger: {
        each: 0.05,
        from: "center"
      }
    })
  }, {scope: containerRef});
  const pop = contextSafe((target: gsap.TweenTarget) => {
    gsap.to(target, {
      y: "-10px",
      x: "8px",
      duration: 0.5,
      stagger: 0.05,
      ease: "elastic.out(1.2,0.5)",
    });
    gsap.to(target, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.05,
    })
    gsap.to(target, {
      y: "0px",
      x: "0px",
      duration: 0.3,
      stagger: 0.05,
      ease: "power3.out",
      delay: 0.7
    })
    gsap.to(target, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
      delay: 0.8
    })
  })

  return (
    <div ref={containerRef} className="flex flex-col h-screen font-satoshi border-b">
        <div className="flex relative justify-center items-center h-[23vw] mt-20 border-t border-b">
          { letters.map((letter, index) => (
            <div key={index} className="relative flex w-fit mt-4">
              <h1 className="w-fit box popup opacity-0 font-revelia text-[21vw] text-center text-jetblack">
                {letter === ' ' ? '\u00A0' : letter}
              </h1>
              <h1 onMouseEnter={(e) => pop(e.currentTarget)} className="w-fit text appear opacity-0 absolute left-0 font-revelia text-[21vw] text-center text-gold text-stroke">
                {letter === ' ' ? '\u00A0' : letter}
              </h1>
            </div>
          ))}
          <h4 className="absolute text-[28px] bottom-5 right-10 font-satoshi font-medium overflow-hidden"><p className="name">NOEL GEORGE</p></h4>
        </div>
        <div className="border-b w-full h-14 flex items-center justify-around">
          { [...Array(6).keys()].map((index) => (
            <Image key={index} src={'/star.png'} alt="star" width={40} height={40} className="star" />
          ))}
        </div>
        <div className="w-full flex grow">
          <div className="h-full text-sm font-medium flex justify-center mt-16 grow-[1]"><p className="w-28">DESIGN.<br />CODE.<br />RENDER.<br />REPEAT</p></div>
          <div className="grow-[7] border-l border-r h-full"></div>
          <div className="h-full text-sm font-medium flex justify-center mt-16 grow-[1]"><p className="w-28">I DESIGN, CODE AND RENDER INTERACTIVE EXPERIENCES IN 2D AND 3D</p></div>
        </div>
    </div>
  );
}
