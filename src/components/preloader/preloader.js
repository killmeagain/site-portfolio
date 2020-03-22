(function() {
    document.addEventListener("DOMContentLoaded", preloaderHandler);

    function preloaderHandler() {
        const preloader = document.querySelector(".preloader");
        const body = document.querySelector("body");

        preloader.classList.add("preloader_loaded");
        body.style.overflow = "auto";
    }
})()