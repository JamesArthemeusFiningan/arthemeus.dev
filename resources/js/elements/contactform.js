import twemoji from "twemoji";
import { names } from "./names.js";
import steps from "./cf-steps.js";
import validate from "validate.js";

class ContactForm {

    constructor() {
        this.formWrapper = document.createElement('div');
        this.names = names;
        this.formWrapper.classList.add('art-contactform-wrapper');
        this.timingFuntion = 'ease-in-out';
        this.duration = 500;
        this.twemoji = twemoji;
        this.submitListener();
        this.activeField = null;
    }

    render() {
        this.initiateForm();
    }

    initiateForm() {
        this.formWrapper.innerHTML = `
            <form class="art-contactform" action="/api/contact" method="POST">
            </form>
        `;
        this.form = this.formWrapper.querySelector('.art-contactform');
        document.body.appendChild(this.formWrapper);
        this.formInner = document.createElement('div');
        this.formInner.classList.add('art-contactform-inner');
        this.form.appendChild(this.formInner);
        this.formContent = document.createElement('div');
        this.formContent.classList.add('art-contactform-content');
        this.formInner.appendChild(this.formContent);
        this.animateFormIntro();
        this.appendCloseButton();
        this.appendTitle();
        this.appendInput("name");
    }

    animateFormIntro() {
        document.documentElement.style.overflow = 'hidden';
        this.formWrapper.animate([
            { opacity: 0, transform: 'translateY(100px)', visibility: 'hidden' },
            { opacity: 1, transform: 'translateY(0)', visibility: 'visible' },
        ], {
            duration: this.duration * 1,
            easing: this.timingFuntion,
            fill: 'forwards'
        });
    }

    appendCloseButton() {
        this.closeButton = document.createElement('a');
        this.closeButton.classList.add('art-contactform-close');
        this.closeButton.innerHTML = `
            <span>
                <i class="icofont-close-squared-alt mr-1"></i>
                Ooops, changed my mind 🫠
            </span>
        `;
        this.formContent.appendChild(this.closeButton);
        this.twemoji.parse(this.closeButton, {
            className: "art-twemoji",
            ext: ".svg",
            size: "svg",
        });
        setTimeout(() => {
            this.closeButton.animate([
                { opacity: 0, transform: 'translateY(100%)' },
                { opacity: 1, transform: 'translateY(0)' },
            ], {
                duration: this.duration * 1,
                easing: this.timingFuntion,
                fill: 'forwards'
            });
        }, this.duration * 7);

        this.closeButton.addEventListener('click', () => {
            this.animateFormOutro();
        });
    }

    animateFormOutro() {
        this.formWrapper.animate([
            { opacity: 1, transform: 'translateY(0)', visibility: 'visible' },
            { opacity: 0, transform: 'translateY(100px)', visibility: 'hidden' },
        ], {
            duration: this.duration * 1,
            easing: this.timingFuntion,
            fill: 'forwards'
        });
        document.documentElement.style.overflow = 'auto';
        setTimeout(() => {
            this.formWrapper.remove();
        }, this.duration * 1);
    }

    appendTitle() {
        this.title = document.createElement('h2');
        this.title.classList.add('art-contactform-title', 'blinded');
        this.title.innerHTML = `
            Say 👋
        `;
        this.formContent.appendChild(this.title);
        this.twemoji.parse(this.title, {
            className: "art-twemoji",
            ext: ".svg",
            size: "svg",
        });
        this.reveal(this.title, {
            delay: 1
        });
    }

    appendInput(name) {
        let options = steps[name];
        let inputGp = document.createElement('div');
        inputGp.classList.add('art-contactform-input-group', 'blinded');
        let input;
        switch (options.type) {
            case "text" || "email":
                input = this.textInput(name, options);
                break;
            case "textarea":
                input = this.textareaInput(name, options);
                break;
            default:
                input = this.textInput(name, options);
                break;
        }
        let label = this.label(name, options);
        let enterHelper = this.enterHelper();
        inputGp.appendChild(label);
        inputGp.appendChild(input);
        inputGp.appendChild(enterHelper);
        this.formContent.appendChild(inputGp);
        this.activeField = input;
        this.nextField = options.next;
        this.reveal(inputGp, {
            delay: options.delay || 0
        });
    }

    textInput(name, options = {}) {
        let input = document.createElement('input');
        input.classList.add('art-contactform-input');
        input.setAttribute('type', options.type);
        input.setAttribute('name', name);
        input.setAttribute('placeholder', options.placeholder);
        input.setAttribute('required', options.required || false);
        return input;
    }

    textareaInput(name, options = {}) {
        let input = document.createElement('textarea');
        input.classList.add('art-contactform-input');
        input.setAttribute('name', name);
        input.setAttribute('placeholder', options.placeholder);
        input.setAttribute('required', options.required || false);
        input.addEventListener('input', (e) => {
            input.style.height = 'auto';
            input.style.height = input.scrollHeight + 'px';
        });
        return input;
    }

    label(name, options = {}) {
        let label = document.createElement('label');
        label.classList.add('art-contactform-label');
        label.setAttribute('for', name);
        label.innerText = options.label;
        return label;
    }

    enterHelper() {
        let enterHelper = document.createElement('div');
        enterHelper.classList.add('art-contactform-enter-helper');
        enterHelper.innerHTML = `
            <span class="art-contactform-enter-helper-text">
                Press <span class="art-contactform-enter-helper-key">Enter</span> to submit
            </span>
        `;
        return enterHelper;
    }

    reveal(element, options = {}) {
        setTimeout(() => {
            element.animate([
                { maxHeight: '0' },
                { maxHeight: element.scrollHeight + 'px', offet: 1 },
                { maxHeight: "10000px", overflow: "visible" },
            ], {
                duration: this.duration * 1,
                easing: this.timingFuntion,
                fill: 'forwards'
            });
        }, this.duration * options.delay || 0);
    }

    vanish(element, options = {}) {
        setTimeout(() => {
            element.animate([
                { maxHeight: element.scrollHeight + 'px' },
                { maxHeight: '0' },
            ], {
                duration: this.duration * 1,
                easing: this.timingFuntion,
                fill: 'forwards'
            });

            setTimeout(() => {
                element.remove();
            }, this.duration * 1);

        }, this.duration * options.delay || 0);
    }

    submitListener() {
        window.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                let validation = this.validate(this.activeField);
                console.log(validation);
                if (validation.error) {
                    this.activeField.animate([
                        { borderBottomColor: 'currentColor' },
                        { borderBottomColor: 'red' },
                    ], {
                        duration: this.duration * 1,
                        easing: this.timingFuntion,
                        fill: 'forwards'
                    });
                    let error = document.createElement('div');
                    error.classList.add('art-contactform-error', "blinded");
                    error.innerText = validation.message;
                    this.activeField.parentNode.appendChild(error);
                    this.reveal(error);
                    setTimeout(() => {
                        this.vanish(error);
                    }, this.duration * 0.4 * validation.message.length);
                } else if (validation === true) {
                    this.activeField.setAttribute("readonly", true);
                    this.activeField.closest(".art-contactform-input-group").animate([
                        { opacity: 1 },
                        { opacity: 0.15 },
                    ], {
                        duration: this.duration * 1,
                        easing: this.timingFuntion,
                        fill: 'forwards'
                    });
                    this.vanish(this.activeField.nextElementSibling, {
                        delay: 0.25
                    });
                    this.appendInput(this.nextField);
                }

            }
        });
    }

    validate(field) {
        let constraints = {
            [field.name]: {
                presence: field.required ?? false,
                email: field.type === "email" ?? false,
                length: {
                    maximum: {
                        value: field.maxLength ?? 1000,
                        message: "is too long"
                    }
                }
            }
        };
        console.log(constraints);
        let errors = validate(this.form, constraints);
        if (errors) {
            return ({
                error: true,
                message: errors[field.name][0]
            });
        }
        else {
            return true;
        }
    }
}

let contactForm = new ContactForm();

document.addEventListener('click', (e) => {
    e = e || window.event;
    if (e.target.classList.contains('art-contactform-trigger')) {
        e.preventDefault();
        contactForm.render();
    }
});
