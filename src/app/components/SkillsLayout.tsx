'use client'
import React from "react";
// import ReactPlayer from "react-player";
import Image from "next/image";
import thorfinn from "../assets/thorfinn-removebg-preview.png"
import nextjs from "../assets/nextjs.png"
import python from "../assets/python.png"
import nodejs from "../assets/nodejs.png"
import typescript from "../assets/typescript.png"
import reactjs from "../assets/reactjs.png"
import tailwindcss from "../assets/tailwindcss.png"

const SkillsLayout = () => {
    return (
        <div className="container relative grid lg:grid-cols-2">
            <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={reactjs}
            alt="image overlay"
            />
            <Image 
            className="mx-auto"
            src={tailwindcss}
            alt="first image"
            width={400}
            height={400}
            />
            <Image
            className="mx-auto"
            src={nextjs}
            alt="second image"
            width={400}
            height={400}
            />
            <Image
            className="mx-auto" 
            src={nodejs}
            alt="third image"
            width={400}
            height={400}
            />
            <Image
            className="mx-auto" 
            src={typescript}
            alt="fourth image"
            width={400}
            height={400}
            />
        </div>
    );
}

export default SkillsLayout