const animateLogo = (appLogo) => {
    setTimeout(() => {
        appLogo.classList.add("art-app-logo--animated1");
    }, 1000);

    setTimeout(() => {
        appLogo.classList.remove("art-app-logo--animated1");
    }, 8000);

    setTimeout(() => {
        appLogo.classList.add("art-app-logo--animated2");
    }, 9000);

    setTimeout(() => {
        appLogo.classList.remove("art-app-logo--animated2");
    }, 16000);
}

if (document.querySelector(".art-app-logo")) {
    let appLogo = document.querySelector(".art-app-logo");

    animateLogo(appLogo);

    setInterval(() => {
        animateLogo(appLogo);
    }, 16000);
}
