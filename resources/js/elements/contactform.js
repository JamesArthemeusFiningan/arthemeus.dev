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
        this.enterListener();
        this.activeField = null;
        this.goBackToField = this.goBackToField.bind(this);
        this.backHandlers = {};
    }

    render() {
        this.initiateForm();
    }

    initiateForm() {
        this.form = document.createElement('form');
        this.form.classList.add('art-contactform');
        this.form.setAttribute('action', '/api/contact');
        this.form.setAttribute('method', 'POST');
        this.form.setAttribute('novalidate', 'novalidate');
        this.form.onsubmit = (e) => {
            return false;
        };
        this.formWrapper.appendChild(this.form);
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
        this.title.classList.add('art-contactform-title');
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
        inputGp.classList.add('art-contactform-input-group');
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
        inputGp.appendChild(this.label(name, options));
        inputGp.appendChild(input);
        inputGp.appendChild(this.enterHelper(options.next == "submit"));
        this.setFocusToActiveField();
        if (options.next == "submit") {
            inputGp.appendChild(this.submitButton());
        }
        this.formContent.appendChild(inputGp);
        this.activeField = input;
        this.activeFieldOptions = options;
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
        input.setAttribute('autocomplete', options.autocomplete || 'off');
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

    submitButton() {
        let submit = document.createElement("button")
        submit.classList.add("art-button", "art-submit-button", "is-gay")
        submit.setAttribute("type", "submit")
        submit.innerText = 'Send Message 📨'
        this.twemoji.parse(submit, {
            className: "art-twemoji",
            ext: ".svg",
            size: "svg",
        });
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            this.submit();
        });
        return submit;
    }

    label(name, options = {}) {
        let label = document.createElement('label');
        label.classList.add('art-contactform-label');
        label.setAttribute('for', name);
        label.innerText = options.label;
        return label;
    }

    enterHelper(submit = false) {
        let enterHelper = document.createElement('div');
        let type = submit ? "submit" : "proceed";
        enterHelper.classList.add('art-contactform-enter-helper');
        enterHelper.innerHTML = `
            <span class="art-contactform-enter-helper-text">
                Press <span class="art-contactform-enter-helper-key">Enter</span> to ${type}
            </span>
        `;
        return enterHelper;
    }

    reveal(element, options = {}) {
        if (!element) return;
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
        if (!element) return;
        setTimeout(() => {
            element.animate([
                { maxHeight: "10000px", overflow: "visible", offset: 0 },
                { maxHeight: element.scrollHeight + 'px', overflow: "hidden" },
                { maxHeight: '0', overflow: "hidden" },
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

    setFocusToActiveField() {
        setTimeout(() => {
            this.activeField.focus()
            this.activeField.select()
        }, this.duration * 1.15);
    }

    enterListener() {
        window.addEventListener('keydown', (e) => {
            if (e.shiftKey) {
                return;
            }
            if (e.key === "Enter") {
                e.preventDefault();
                let validation = this.validate(this.activeField, this.activeFieldOptions);
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
                    error.classList.add('art-contactform-error');
                    error.innerText = validation.message;
                    this.activeField.parentNode.insertBefore(error, this.activeField.nextSibling);
                    this.reveal(error);
                    setTimeout(() => {
                        this.activeField.animate([
                            { borderBottomColor: 'red' },
                            { borderBottomColor: 'currentColor' },
                        ], {
                            duration: this.duration * 1,
                            easing: this.timingFuntion,
                            fill: 'forwards'
                        });
                        this.vanish(error);
                    }, this.duration * 0.4 * validation.message.length);
                    return;
                }
                if (this.activeFieldOptions.next == "submit") {
                    this.submit();
                } else {
                    this.vanish(this.formContent.querySelector(".art-contactform-error") || null);
                    this.activeField.animate([
                        { borderBottomColor: 'currentColor' },
                        { borderBottomColor: 'white' },
                    ], {
                        duration: this.duration * 1,
                        easing: this.timingFuntion,
                        fill: 'forwards'
                    });
                    this.activeField.setAttribute("readonly", true);
                    let activeIG = this.activeField.closest(".art-contactform-input-group");
                    activeIG.animate([
                        { opacity: 1, filter: 'blur(0)' },
                        { opacity: 0.15, filter: 'blur(2px) grayscale(1)' },
                    ], {
                        duration: this.duration * 1,
                        easing: this.timingFuntion,
                        fill: 'forwards'
                    });
                    activeIG.style.cursor = "pointer";
                    const BackHandler = (e) => {
                        e.preventDefault();
                        this.goBackToField(activeIG);
                    }
                    this.backHandlers[this.activeFieldOptions.name] = BackHandler;
                    activeIG.addEventListener('click', BackHandler);
                    this.appendInput(this.nextField);
                }
            }
        });
    }

    validate(field, fieldOptions) {
        let constraints = {
            [field.name]: {
                presence: fieldOptions.required ?? false,
                email: fieldOptions.type === "email" ?? false,
                length: {
                    maximum: {
                        value: fieldOptions.maxLength ?? 1000,
                        message: fieldOptions.maxlengthmessage ?? "This input is too long"
                    }
                }
            }
        };
        validate.options = {
            fullMessages: false
        }
        validate.validators.presence.options = {
            message: fieldOptions.presencemessage ?? "This field is required"
        }
        validate.validators.email.options = {
            message: fieldOptions.emailmessage ?? "This is not a valid email"
        }
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

    async submit() {
        let formData = new FormData(this.form);
        let response = await fetch(this.form.action, {
            method: this.form.method,
            body: formData
        });
        this.changeFormVisibility(false);
        let data = await response.json();
        console.log(data);
        setTimeout(() => {
            if (data.success) {
                this.outroAnimation();
            } else {
                let error = document.createElement('div');
                error.classList.add('art-contactform-error');
                error.innerHTML = `
                    <div class="art-contactform-error-content">
                        <p>${data.message}</p>
                    </div>
                `
                this.formContent.appendChild(error);
                this.changeFormVisibility(true);
                setTimeout(() => {
                    this.reveal(error);
                }, this.duration * 1);
                setTimeout(() => {
                    this.vanish(error);
                }, this.duration * 10);
            }
        }, this.duration * 1 + 250);
    }

    changeFormVisibility(visible) {
        this.form.animate([
            { opacity: visible ? 0 : 1, filter: visible ? 'blur(2px) grayscale(1)' : 'blur(0)' },
            { opacity: visible ? 1 : 0, filter: visible ? 'blur(0)' : 'blur(2px) grayscale(1)' },
        ], {
            duration: this.duration * 1,
            easing: this.timingFuntion,
            fill: 'forwards'
        });
    }

    outroAnimation() {
        this.vanish(this.closeButton);
        setTimeout(() => {
            this.formContent.animate([
                { opacity: 1, filter: 'blur(0)' },
                { opacity: 0, filter: 'blur(2px) grayscale(1)' },
            ], {
                duration: this.duration * 1,
                easing: this.timingFuntion,
                fill: 'forwards'
            });
            setTimeout(() => {
                this.formContent.remove();
                this.formContent = document.createElement('div');
                this.formContent.classList.add('art-contactform-content');
                this.formInner.appendChild(this.formContent);
                let successMessage = document.createElement('div');
                successMessage.classList.add('art-contactform-success', "text-center");
                successMessage.innerHTML = `
                    <div>
                        <p class="text-2xl md:text-4xl lg:text-7xl font-black">Thank you for your message!</p>
                        <p class="text-xl">I'll try to get back to you as soon as possible.</p>
                    </div>
                `;
                this.formContent.appendChild(successMessage);
                this.formContent.animate([
                    { opacity: 0, filter: 'blur(2px) grayscale(1)' },
                    { opacity: 1, filter: 'blur(0)' },
                ], {
                    duration: this.duration * 1,
                    easing: this.timingFuntion,
                    fill: 'forwards'
                });
            }, this.duration * 1);
        }, this.duration * 1);
    }


    goBackToField(field) {
        let nextSiblings = [];
        let element = field;
        let fieldOptions = steps[field.querySelector("input").name];
        while (element = element.nextSibling) {
            nextSiblings.push(element);
        }
        let i = 0;
        nextSiblings.reverse();
        nextSiblings.forEach((sibling) => {
            this.vanish(sibling, {
                delay: i - 1
            });
            i++;
        });
        setTimeout(() => {
            field.animate([
                { opacity: 0.15, filter: 'blur(2px) grayscale(1)' },
                { opacity: 1, filter: 'blur(0)' },
            ], {
                duration: this.duration * 1,
                easing: this.timingFuntion,
                fill: 'forwards'
            });
            field.style.cursor = "auto";
            field.removeEventListener('click', this.backHandlers[fieldOptions.name]);
            field.querySelector("input").removeAttribute("readonly");
            this.activeField = field.querySelector("input");
            this.activeFieldOptions = steps[this.activeField.name];
            this.nextField = this.activeFieldOptions.next;
            this.setFocusToActiveField();
        }, this.duration * i - 1);
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
