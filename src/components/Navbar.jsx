
import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    // check if the menu is open and set the body overflow accordingly - to prevent scrolling when the menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    

    return (<nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        {/* Top container */}
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white"> graceC<span className="text-pink-500">.dev</span> </a>

                {/* Hamburger menu for mobile view */ }
                {!menuOpen && <div className="w-10 h-8 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>    
                    &#9776; {/* Hamburger icon */ }
                </div>}

                {/* Desktop menu */ }
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> Projects </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> Contact </a>
                </div>

            </div>

        </div>
    </nav>)

}