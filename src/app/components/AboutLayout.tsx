import Image from "next/image";
import skills2 from "../assets/skills2.png"
import skills1 from "../assets/skills1.png"

const AboutLayout = () => {
    return (
        <section className="container grid grid-cols-2 h-screen">
            <div className="bg-black">
                <h2 className="text-center my-96 text-white text-4xl font-extrabold">Perhaps it belonged to domain of legend</h2>
            </div>
            <div className="images m-10">
            <div className="grid grid-cols-2">
                    <Image
                        className="w-full rounded-lg ml-4 mb-24 z-50"
                        src={skills2}
                        alt="image overlay"
                    />
                    <Image 
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src={skills1}
                        alt="first image"
                        />                    
            </div>
            <div className="grid grid-cols-2">
                    <Image
                        className="w-full rounded-lg ml-4 mb-24 z-50"
                        src={skills2}
                        alt="image overlay"
                    />
                    <Image 
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src={skills1}
                        alt="first image"
                        />                    
            </div>
            </div>
        </section>
    )
}

export default AboutLayout