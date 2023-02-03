const toggleMenu = () => {
    const menuWrapper = document.querySelector(".art-navmenu-wrapper");
    const menu = menuWrapper.querySelector(".art-navmenu-outer");
    if (!menuWrapper.classList.contains("art-menu--open")) {
        menuWrapper.classList.add("art-menu--open");
        menuWrapper.style.maxWidth = menu.clientWidth + "px";
        setTimeout(() => {
            menuWrapper.style.maxWidth = "unset";
        }, 300);
    } else {
        menuWrapper.classList.remove("art-menu--open");
        menuWrapper.style.maxWidth = menu.clientWidth + "px";
        setTimeout(() => {
            menuWrapper.style.maxWidth = "0";
        }, 5);
    }
}

const toggleButton = () => {
    const button = document.querySelector("button.art-menu-tofuburger");
    if (!button.classList.contains("art-menu-tofuburger--x")) {
        button.classList.add("art-menu-tofuburger--open");

        setTimeout(() => {
            button.classList.add("art-menu-tofuburger--x");
        }, 500);
    } else {
        button.classList.remove("art-menu-tofuburger--x");
        setTimeout(() => {
            button.classList.remove("art-menu-tofuburger--open");
        }, 500);
    }
}

const toggleClasses = () => {
    const main = document.querySelector("main");
    const html = document.querySelector("html");
    if (!main.classList.contains("art-menu--open")) {
        main.classList.add("art-menu--open");
        html.classList.add("art-menu--open");
    } else {
        main.classList.remove("art-menu--open");
        html.classList.remove("art-menu--open");
    }
}


const spanify = (item) => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
    const text = item.textContent;
    const Letters = text.split("");
    const spanified = Letters.map((letter) => {
        let randomLetter = letters[Math.floor(Math.random() * letters.length)];
        let span = document.createElement("span");
        span.style.opacity = 0;
        span.style.width = 0;
        span.style.height = "1.2em";
        span.style.display = "inline-block";
        span.style.overflow = "hidden";
        span.dataset.letter = letter;
        span.textContent = randomLetter;
        console.log(span);
        return span.outerHTML;
    });
    item.innerHTML = spanified.join("");
}

const randomifySpans = () => {
    document.querySelectorAll(".art-menu-item").forEach(function (item) {
        const spans = item.querySelectorAll("span");
        let i = 0;
        spans.forEach((span) => {
            const storedLetter = span.dataset.letter;
            const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
            const randomIterations = 20;
            for (let it = 0; it < randomIterations; it++) {
                setTimeout(() => {
                    span.textContent = letters[Math.floor(Math.random() * letters.length)];;
                }, 10 * it + 60 * i);
                setTimeout(() => {
                    span.textContent = storedLetter;
                }, 10 * it + 10 + 60 * i);
                if (it == randomIterations - 1 && i == spans.length - 1) {
                    setTimeout(() => {
                        span.style.color = "var(--art-gay)";
                    }, 10 * it + 10 + 60 * i);
                }
                setTimeout(() => {
                    span.style.opacity = 1;
                    span.style.width = "auto";
                    if (span.dataset.letter == " ") {
                        span.style.width = "0.35em";
                    }
                }, 10 * it + 10 + 60 * i);
            }
            i++;
        });
    });
}

const resetSpans = () => {
    document.querySelectorAll(".art-menu-item span").forEach(function (span) {
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        span.style.opacity = 0;
        span.style.color = "white";
        span.style.width = 0;
        span.style.display = "inline-block";
        span.style.overflow = "hidden";
        span.textContent = letters[Math.floor(Math.random() * letters.length)];
    });
}


if (document.querySelector("button.art-menu-tofuburger")) {
    document.querySelector("button.art-menu-tofuburger").addEventListener("click", function () {
        toggleMenu();
        toggleButton();
        toggleClasses();
        setTimeout(() => {
            if (document.querySelector(".art-navmenu-wrapper").classList.contains("art-menu--open")) {
                randomifySpans();
            } else {
                resetSpans();
            }
        }, 300);
        document.querySelectorAll(".art-menu-item").forEach(function (item) {
            item.addEventListener("click", function () {
                toggleMenu();
                toggleButton();
                toggleClasses();
                setTimeout(() => {
                    resetSpans();
                }, 300);
            });
        });
    });
}

if (document.querySelector(".art-menu-item")) {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".art-menu-item").forEach(function (item) {
            spanify(item);
        });
    });
}

