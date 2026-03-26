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
                'Blue 900 (Dark Mode Elements)': 'hsl(209, 23%, 22%)',
                'Blue 950 (Dark Mode Background)': 'hsl(207, 26%, 17%)',
                'Grey 950 (Light Mode Text)': 'hsl(200, 15%, 8%)',
                'Grey 400 (Light Mode Input)': 'hsl(0, 0%, 50%)',
                'Grey 50 (Light Mode Background)': 'hsl(0, 0%, 99%)',
                'White (Dark Mode Text & Light Mode Elements)': 'hsl(0, 100%, 100%)'

      },
        },
    },
    plugins: [],
}