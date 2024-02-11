import HeroSection from "./components/Hero";
import HeaderSection from "./components/Header";
import ComicLayout from "./components/ComicLayout";
import SinglePageSections from "./components/SinglePageSections";

export default function Home() {
  return (
    <div>
      <header className="sticky top-0 z-50"> 
        <HeaderSection />
      </header>
      <main className="relative">
        {/* <HeroSection /> */}
        {/* <ComicLayout /> */}
        <SinglePageSections/>
      </main>
    </div>
  );
}
