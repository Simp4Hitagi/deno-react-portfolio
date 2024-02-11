import Image from "next/image";
import thorfinn from "../assets/thorfinn-removebg-preview.png"
import skills1 from "../assets/skills1.png"
import skills2 from "../assets/skills2.png"
import skills3 from "../assets/skills3.webp"
import skills4 from "../assets/skills4.webp"

const SkillsLayout = () => {
    return (
        <div className="container relative grid lg:grid-cols-2">
            {/* Thorfin overlay */}
            <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={thorfinn}
            alt="image overlay"
            />
            <Image 
            className=""
            src={skills1}
            alt="first image"
            />
            <Image 
            src={skills2}
            alt="second image"
            />
            <Image 
            src={skills3}
            alt="third image"
            />
            <Image 
            src={skills4}
            alt="fourth image"
            />
        </div>
    );
}

export default SkillsLayout