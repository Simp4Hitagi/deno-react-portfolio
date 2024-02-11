import ComicLayout from "./ComicLayout";
import Projectslayout from "./ProjectsLayout"
import SkillsLayout from "./SkillsLayout";
import AboutLayout from "./AboutLayout";

const SinglePageSetions = () => {
    return (
        <div className="container relative grid grid-rows-4">
            {/* Home */}
            <div className="sticky top-0 h-fit w-screen flex flex-col items-center justify-center bg-black">
                <ComicLayout />
            </div>
            {/* Projects */}
            <div className="sticky top-0 h-screen w-screen items-center justify-center bg-white text-black">
                <Projectslayout />
            </div>
            {/* Skills */}
            <div className="sticky top-0 h-fit w-screen flex flex-col items-center justify-center bg-black text-white">
             <SkillsLayout />
            </div>
            {/* About */}
            <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-white text-black">
            <AboutLayout />
            </div>
        </div>        
    )
};

export default SinglePageSetions;