import Link from "next/link";

const HeaderSection = () => {
    return (
        <header className="navbar">
            <div className="navbar-start">Logo</div>

            <div className="navbar-end">
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <div>
                    <Link href="/projects">Projects</Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderSection;
