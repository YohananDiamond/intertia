'use strict';

// TODO: make button divs pinned to top and bottom

let intertia = {};
intertia.prepare = ({main_div_id}) => {
    let main_div = document.getElementById(main_div_id);
    main_div.classList += " intertia-main-section";

    let sec_slides = main_div.querySelector(".intertia-slides-section");

    let sec_btn = document.createElement("div");
    sec_btn.classList = "intertia-buttons-section";
    main_div.insertBefore(sec_btn, sec_slides);

    let sec_btn_mobile = document.createElement("div");
    sec_btn_mobile.classList = "intertia-mobile-buttons-section";
    main_div.appendChild(sec_btn_mobile);

    let elements_list = [];
    let buttons_list = [];

    let selectSlide = (idx) => {
        for (let button of buttons_list) {
            button.setAttribute("data-selected", "false");
        }

        for (let el2 of sec_slides.children) {
            el2.style.display = "none";
        }

        elements_list[idx].style.display = "";

        let button_current = buttons_list[idx];
        button_current.setAttribute("data-selected", "true");
        button_current.scrollIntoView({
            behavior: "smooth",
        });
    };

    let current_slide = 0;

    let counter = 0;
    for (let element of sec_slides.children) {
        if (element.classList.contains("slide")) {
            let title = element.getAttribute("data-slide-title");
            element.setAttribute("data-slide-index", counter);
            elements_list.push(element);

            const _counter_copy = counter;
            let button = document.createElement("div");
            button.classList = "intertia-button";
            button.innerText = title;
            button.setAttribute("data-selected", "false");
            button.addEventListener("click", () => {
                current_slide = _counter_copy;
                selectSlide(_counter_copy);
            });
            buttons_list.push(button);

            sec_btn.appendChild(button);

            counter += 1;
        }
    }

    selectSlide(current_slide);

    let nextSlide = () => {
        if (current_slide < elements_list.length - 1) {
            current_slide += 1;
            selectSlide(current_slide);
        }
    };
    let previousSlide = () => {
        if (current_slide > 0) {
            current_slide -= 1;
            selectSlide(current_slide);
        }
    };

    /* Mobile buttons */
    for (const [text, action] of Object.entries({"<-": previousSlide, "->": nextSlide}))
    {
        let button = document.createElement("div");
        button.classList = "intertia-button";
        button.innerText = text;
        button.addEventListener("click", action);
        sec_btn_mobile.appendChild(button);
    }

    /* Keypresses */
    window.addEventListener("keydown", (ev) => {
        if (ev.key == "ArrowRight" || ev.key == "j") {
            nextSlide();
        } else if (ev.key == "ArrowLeft" | ev.key == "k") {
            previousSlide();
        }
    });
};
