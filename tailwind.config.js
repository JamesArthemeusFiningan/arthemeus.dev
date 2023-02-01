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
            }
        },
    },
    plugins: [],
}
