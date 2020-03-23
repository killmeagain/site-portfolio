(function() {
    document.addEventListener("scroll", handlerScroll);

    function handlerScroll() {
        const home = document.querySelector(".home");
        let height = Number(home.offsetHeight);

        if(document.documentElement.scrollTop / height * 300 < 300) {
            home.style.backgroundPosition = `50% -${document.documentElement.scrollTop / height * 300}px`;
        }
        
    }
})()