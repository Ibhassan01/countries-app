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
        <nav className="flex items-center justify-between px-4 py-6 shadow-md bg-app-element transition-colors duration-300 md:px-20">
            <h1 className="font-bold text-app-text">Where in the world</h1>
            <button 
            className="flex items-center gap-2 font-semibold text-app-text cursor-pointer"
            onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun size={20}/> : <Moon size={20}/>}
                {isDark ? 'White' : 'Dark'}
            </button>
        </nav>
    );
}
 
export default NavBar;