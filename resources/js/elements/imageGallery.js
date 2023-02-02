class imageGallery {
    constructor(el, uuid) {
        this.el = el;
        this.uuid = uuid;
        this.images = "";
        this.activeImage = "";
        this.activeImageIndex = 0;
        this.pastImage = "";
        this.pastImageIndex = "";
        this.nextImage = "";
        this.nextImageIndex = "";
        this.lastImage = "";
        this.lastImageIndex = "";
        this.pageButtons = "";
        this.pageCounter = "";
        this.switchTimeout = "";

        if (!window.galleries) window.galleries = {};
        window.galleries[this.uuid] = this;

        this.init();
    }

    init() {
        this.images = this.el.querySelectorAll(".art-img-gallery-item");
        this.activeImage = this.el.querySelector(".art-img-gallery-item-state-active");
        this.activeImageIndex = 0;
        this.pastImage = this.el.querySelector(".art-img-gallery-item-state-past");
        this.pastImageIndex = Array.from(this.images).indexOf(this.pastImage);
        this.nextImage = this.el.querySelector(".art-img-gallery-item-state-future-visible");
        this.nextImageIndex = Array.from(this.images).indexOf(this.nextImage);
        this.pageButtons = this.el.querySelectorAll(".art-img-gallery-pagination-buttons button");
        this.pageCounter = this.el.querySelector(".art-img-gallery-pagination-counter span");

        document.addEventListener("DOMContentLoaded", (e) => {
            this.pageButtons.forEach((el) => {
                el.addEventListener("click", (e) => {
                    let direction = el.dataset.direction;
                    this.switch(direction);
                });
            });
        });

        window.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                console.log(this)
            }
        });

        this.SwitchTimeout = setTimeout(() => {
            this.switch("next");
        }, 5000);
    }

    switch(direction) {
        clearTimeout(this.SwitchTimeout);
        this.SwitchTimeout = setTimeout(() => {
            this.switch("next");
        }, 5000);

        if (direction === "next") {
            this.activeImage.classList.remove("art-img-gallery-item-state-active");
            this.activeImage.classList.add("art-img-gallery-item-state-past");
            this.nextImage.classList.remove("art-img-gallery-item-state-future-visible");
            this.nextImage.classList.add("art-img-gallery-item-state-active");
            this.pastImage.classList.remove("art-img-gallery-item-state-past");
            this.pastImage.classList.add("art-img-gallery-item-state-future-invisible");
            let futureInvisible = this.images[(this.nextImageIndex + 1 > this.images.length - 1) ? 0 : this.nextImageIndex + 1];
            futureInvisible.classList.remove("art-img-gallery-item-state-future-invisible");
            futureInvisible.classList.add("art-img-gallery-item-state-future-visible");

            this.pastImage = this.activeImage;
            this.activeImage = this.nextImage;
            this.nextImage = futureInvisible;
        } else if (direction === "last") {
            this.activeImage.classList.remove("art-img-gallery-item-state-active");
            this.activeImage.classList.add("art-img-gallery-item-state-future-visible");
            this.pastImage.classList.remove("art-img-gallery-item-state-past");
            this.pastImage.classList.add("art-img-gallery-item-state-active");
            let last = this.images[this.pastImageIndex - 1 < 0 ? this.images.length - 1 : this.pastImageIndex - 1]
            last.classList.remove("art-img-gallery-item-state-future-invisible");
            last.classList.add("art-img-gallery-item-state-past");
            this.nextImage.classList.remove("art-img-gallery-item-state-future-visible");
            this.nextImage.classList.add("art-img-gallery-item-state-future-invisible");

            this.nextImage = this.activeImage;
            this.activeImage = this.pastImage;
            this.pastImage = last;
        }

        this.setIndexes();
        this.pageCounter.innerText = this.activeImageIndex + 1;
    }

    setIndexes() {
        this.pastImageIndex = Array.from(this.images).indexOf(this.pastImage);
        this.activeImageIndex = Array.from(this.images).indexOf(this.activeImage);
        this.nextImageIndex = Array.from(this.images).indexOf(this.nextImage);
    }
}

if (document.querySelector(".art-img-galler-outer")) {
    document.querySelectorAll(".art-img-galler-outer").forEach((el) => {
        new imageGallery(el, crypto.randomUUID());
    });
}
