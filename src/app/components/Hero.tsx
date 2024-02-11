import Image from "next/image";
import photodune from "../assets/photodune.jpg"
import circle from "../assets/circle.svg"

const HeroSection = () => {
    return (
      <section className="container hero grid lg:grid-cols-2 bg-white rounded-2xl h-full">
          <div className="text-black font-semibold mx-auto my-auto p-5 relative">
            <h1 className="text-4xl">Leaders & Champions Are Made... Not Born!</h1>
            <p>
              Get starter today with our EXCLUSIVE offer!
              Request more infromation today find out 
              how you or your child can start training
            </p>
            <button type="button">Find out more</button>
            </div>
          <Image 
            className="absolute top-0 right-32"
            src={circle}
            alt="hero circle overlay"
            width={800}
            height={800}
            />
          <Image
          className=""
            src={photodune}
            alt="hero image"
            />
      </section>
    );
  };
  
  export default HeroSection;