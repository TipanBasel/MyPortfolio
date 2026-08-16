import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-bkg border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">

            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-bold text-primary">
                            MyPortfolio.
                        </h2>
                        <p className="text-secondary text-sm leading-relaxed max-w-xs">
                            Building digital experiences with modern technologies.
                            Let's create something amazing together.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-content font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-2 text-secondary">
                            <li>
                                <Link to="/about" className="hover:text-primary transition-colors">About Me</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-content font-semibold text-lg">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                className="text-secondary hover:text-primary text-xl transition-colors">
                                🐙 GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="text-secondary hover:text-primary text-xl transition-colors">
                                💼 LinkedIn
                            </a>
                            <a href="mailto:hello@example.com"
                                className="text-secondary hover:text-primary text-xl transition-colors">
                                📧 Email
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center">
                    <p className="text-secondary text-sm">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}