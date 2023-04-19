import { names } from "./names.js";

const steps = {
    "name": {
        "type": "text",
        "label": "My name is...",
        "placeholder": names[Math.floor(Math.random() * names.length)],
        "required": true,
        "delay": 3.5,
        "next": "email"
    },
    "email": {
        "type": "email",
        "label": "You can reach me @...",
        "placeholder": "your@email.hihi",
        "required": true,
        "next": "message"
    },
    "message": {
        "type": "textarea",
        "label": "And I wanna tell you...",
        "placeholder": "Tell me about your day",
        "required": true,
        "next": "submit"
    },
    "submit": {
        "type": "submit",
        "label": "Send telegram",
    }
}


export default steps;
