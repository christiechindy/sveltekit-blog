/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {
            borderWidth: {
                "1.5": "1.5px",
            },
            backgroundColor: {
                "bg": "#FFFBF4",
                "line": "#DBDBDB",
            },
            colors: {
                "my": {
                    purple: "#7800F1",
                    dark_green: "#0A2E27",
                    cream: "#FFE9C8",
                    gray: "#A3A3A3",
                    line_gray: "#DBDBDB",
                }
            }
        },
    },
    plugins: [],
}

