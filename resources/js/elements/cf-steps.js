import { names } from "./names.js";

const steps = {
    "name": {
        "type": "text",
        "label": "My name is...",
        "placeholder": names[Math.floor(Math.random() * names.length)],
        "required": true,
        "delay": 3.5,
        "next": "email",
        "presencemessage": "I'm sorry, but I kinda need to know your name."
    },
    "email": {
        "type": "email",
        "label": "You can reach me @...",
        "placeholder": "your@email.hihi",
        "required": true,
        "next": "message",
        "presencemessage": "I'm sorry, but I kinda need to know your email address.",
        "emailmessage": "This does not seem like a valid email address to me."
    },
    "message": {
        "type": "textarea",
        "label": "And I wanna tell you...",
        "placeholder": "Whats up?",
        "required": true,
        "next": "submit",
        "presencemessage": "You have nothing to say at all? :(",
        "maxlengthmessage": "Look, I talk a lot as well, but I think you should try to keep it short and sweet. Cheers!"
    }
}


export default steps;
