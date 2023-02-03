if (document.querySelector("button[type='scroll']")) {
    document.querySelectorAll("button[type='scroll']").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let target = button.dataset.target;
            let targetElem = button.closest(target);
            let targetOffset = targetElem.offsetHeight;
            window.scrollTo({
                top: targetOffset,
                behavior: "smooth",
            });
        });
    });
}
