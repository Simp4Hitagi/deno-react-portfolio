import ComicLayout from "./ComicLayout";

const SinglePageSetions = () => {
    return (
        <div className="container relative grid grid-rows-4">
            <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black">
                <ComicLayout />
            </div>
            <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-white text-black">
                <h2 className="text-4xl">The Second Title</h2>
                <p>Scroll Down</p>
            </div>
            <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
                <h2 className="text-4xl">The Third Title</h2>
                <p>Scroll Down</p>
            </div>
            <div className="sticky top-0 h-screen w-screen flex flex-col items-center justify-center bg-white text-black">
                <h2 className="text-4xl">The Fourth Title</h2>
            </div>
        </div>        
    )
};

export default SinglePageSetions;