import Link from "next/link";

const Header = () => {
    return (
        <nav className="w-full bg-gradient-to-r from-[#18181b] to-[#23272f] shadow-md py-4 px-2 flex justify-center animate-fadeIn z-20">
        <div className="flex gap-4 md:gap-8">
            <Link
            className="text-sky-200 font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#23272f] hover:text-sky-400 hover:shadow-lg text-base md:text-lg"
            href="/"
            >
            Who I&apos;m
            </Link>
            <Link
            className="text-sky-200 font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#23272f] hover:text-sky-400 hover:shadow-lg text-base md:text-lg"
            href="/about"
            >
            About me
            </Link>
            <Link
            className="text-sky-200 font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#23272f] hover:text-sky-400 hover:shadow-lg text-base md:text-lg"
            href="/projects"
            >
            My projects
            </Link>
            <Link
            className="text-sky-200 font-semibold px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#23272f] hover:text-sky-400 hover:shadow-lg text-base md:text-lg"
            href="/contact"
            >
            Contact me
            </Link>
        </div>
        </nav>
    );
};

export default Header;
