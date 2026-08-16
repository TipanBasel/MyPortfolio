import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function NavBar() {
    const navLinks = [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Projects", url: "/projects" },
    ];

    return (
        <nav className="flex justify-between items-center py-4 px-6 mb-8 bg-bkg/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">

            <ul className="flex gap-6">
                {/* {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.url}
                            className="text-content hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    </li>
                ))} */}
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.url}
                            className="text-content hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <ThemeToggle />
        </nav>
    );
}

export default NavBar;