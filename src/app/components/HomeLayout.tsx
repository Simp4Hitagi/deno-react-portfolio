

const HomeLayout = () => {
    return (
        <div className="container wrapper lg:pt-4">
        <div className="comic-item hero-item transition ease-in-out duration-1000 hover:-translate-y-10 hover:scale-100 hover:brightness-50">
        <h1 className="overlay-text text-white text-4xl font-extrabold brightness-200">Totally not placeholder text...</h1>
        </div>
        <div className="comic-item standard-item transition ease-in-out duration-1000 hover:-translate-x-20 hover:scale-100 hover:brightness-50">
        </div>
        <div className="comic-item standard-item transition  ease-in-out duration-1000 hover:translate-x-20 hover:scale-100 hover:brightness-50">
        </div>
        {/* <div className="comic-item standard-item">
        </div> */}
      </div>
    );
};

export default HomeLayout 
