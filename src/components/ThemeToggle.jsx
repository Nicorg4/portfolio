import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            document.documentElement.classList.add('light');
            setIsLightMode(true);
        }
        else {
            document.documentElement.classList.remove('light');
            setIsLightMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isLightMode) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsLightMode(false);
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsLightMode(true);
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn("z-50 rounded-full transition-all duration-300 hover:cursor-pointer hover:opacity-50", "focus:outline-hidden")}>
            {!isLightMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    )
}
