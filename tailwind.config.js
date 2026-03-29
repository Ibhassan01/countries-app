/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Elements (Cards, Navbar, etc.)
                'elements': 'hsl(209, 23%, 22%)', // Blue 900
                'elements-light': 'hsl(0, 100%, 100%)', // White

                // Backgrounds
                'background-dark': 'hsl(207, 26%, 17%)', // Blue 950
                'background-light': 'hsl(0, 0%, 98%)', // Grey 50 

                // Text
                'text-dark': 'hsl(200, 15%, 8%)', // Grey 950
                'text-light': 'hsl(0, 0%, 100%)', // White

                // Input
                'input-gray': 'hsl(0, 0%, 52%)', // Grey 400
            },
        },
    },
    plugins: [],
}