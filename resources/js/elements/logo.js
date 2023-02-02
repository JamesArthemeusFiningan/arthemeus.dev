const animateLogo = (appLogo) => {
    setTimeout(() => {
        appLogo.classList.add("art-app-logo--animated1");
    }, 1000);

    setTimeout(() => {
        appLogo.classList.remove("art-app-logo--animated1");
    }, 6000);

    setTimeout(() => {
        appLogo.classList.add("art-app-logo--animated2");
    }, 7000);

    setTimeout(() => {
        appLogo.classList.remove("art-app-logo--animated2");
    }, 12000);
}

if (document.querySelector(".art-app-logo")) {
    let appLogo = document.querySelector(".art-app-logo");

    animateLogo(appLogo);

    setInterval(() => {
        animateLogo(appLogo);
    }, 12000);
}
