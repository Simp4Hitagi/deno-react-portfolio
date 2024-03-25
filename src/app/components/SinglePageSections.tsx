import HomeLayout from "./HomeLayout";
import Projectslayout from "./ProjectsLayout"
import SkillsLayout from "./SkillsLayout";
import AboutLayout from "./AboutLayout";
import TimelineLayout from "./TimeLine"
import ContactLayout from "./Contact"
import TestimonialsLayout from "./Testimonials"

const SinglePageSetions = () => {
    return (
        <div className="container relative lg:grid lg:grid-rows-4 ">
            {/* Home */}
            <div id="home" className="sticky top-0 h-fit w-screen flex flex-col items-center justify-center bg-black">
                <HomeLayout />
            </div>
            {/* Projects */}
            <div id="projects" className="relative items-center justify-center text-white">
                <div className="absolute backdrop-blur-md top-36 left-0 h-full w-full blur-md"/>
                <Projectslayout />
            </div>
            {/* Skills  */}
            {/* Include resume with timeline */}
            <div id="skills" className="sticky top-0 h-full w-screen flex flex-col items-center justify-center bg-black text-white">
             <SkillsLayout />
             <TimelineLayout />
            </div>
            {/* About */}
            <div id="about" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-white text-black">
            <AboutLayout />
            </div>
            {/* About */}
            <div id="testimonials" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
            <TestimonialsLayout />
            </div>
            <div id="contact" className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-white text-black">
            <ContactLayout />
            </div>
        </div>        
    )
};

export default SinglePageSetions;