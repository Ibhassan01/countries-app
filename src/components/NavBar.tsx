// import { useEffect, useState } from "react";
import React, {useState, useEffect} from "react";
import { Moon, Sun } from "lucide-react";
const NavBar = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    return (
        <nav className="flex items-center justify-between px-4 py-6 shadow-md bg-background-light dark:bg-background-dark transition-colors duration-300 md:px-20">
            <h1 className="font-bold text-text-dark dark:text-text-white">Where in the world</h1>
            <button 
            className="flex items-center gap-2 font-semibold text-text-dark dark:text-text-light cursor-pointer"
            onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun size={20}/> : <Moon size={20}/>}
                {isDark ? 'White' : 'Dark'}
            </button>
        </nav>
    );
}
 
export default NavBar;