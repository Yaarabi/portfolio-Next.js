import Link from "next/link";
import "../styles/header.css";

const Header = () => {
return (
    <nav className="nav">
        <Link className="link" href="/">Who I'm</Link>
        <Link className="link" href="/about">About me</Link>
        <Link className="link" href="/projects">My projects</Link>
        <Link className="link" href="/contact">Contact me</Link>
    </nav>
);
};

export default Header;
