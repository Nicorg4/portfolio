import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        console.log("Active Section:", activeSection);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={cn("fixed w-full z-40 transition-colors duration-300 mt-10")}
        >
            <div className="md:container flex items-center md:justify-center justify-end pr-5">
                {/* <a
                className="text-xl font-bold text-primary flex items-center"
                href="#hero"
                >
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> Nicolas Gota </span>{" "}
                    Portfolio
                </span>
                </a> */}

                {/* desktop nav */}
                <div
                    className={cn(
                        "hidden md:flex space-x-8 p-3 pl-10",
                        isScrolled ? "bg-primary/10 backdrop-blur-md shadow-xs rounded-l-2xl" : ""
                    )}
                >
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className={`text-foreground/80 hover:text-primary font-bold transition-colors duration-300 ${key !== 0 && "pl-8 border-l-2 border-specialborder/50"} ${key === 3 ? "pr-3" : ""}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div
                    className={cn(
                        "hidden md:flex space-x-8 p-3 ml-1",
                        isScrolled ? "bg-primary/10 backdrop-blur-md shadow-xs rounded-r-2xl" : ""
                    )}
                >
                <ThemeToggle />
                </div>
                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col text-xl w-full">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 transition-colors duration-300 border-b-2 w-full p-3 hover:bg-foreground hover:text-background"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};