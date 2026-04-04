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
                'app-bg': 'var(--color-background)',
                'app-element': 'var(--color-element)',
                'app-text': 'var(--color-text)',
                'app-input': 'var(--color-input)'
            },
        },
    },
    plugins: [],
}