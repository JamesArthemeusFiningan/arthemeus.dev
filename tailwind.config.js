/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                "gay": "#FE37A4",
                "apple": "#A4FE37",
                "grape": "#9037FE",
                "lemon": "#FEC837"
            },
            fontSize: {
                "fliess": "2rem",
                "8.5xl": "7rem",
            },
            animation: {
                "shake": "shake 5s cubic-bezier(.36, .07, .19, .97) infinite",
            },
            padding: {
                "1/2": "50%",
                "16/9": "56.25%",
                "4/3": "75%",
                "3/2": "66.66%",
                "full": "100%",
            },
        },
        plugins: [],
    }
}
