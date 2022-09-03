'use strict';

let intertia = {};
intertia.prepare = ({slides_div_id, buttons_div_id}) => {
    let sec_slides = document.getElementById(slides_div_id);
    let sec_btn = document.getElementById(buttons_div_id);

    let elements_list = [];
    let buttons_list = [];

    let selectSlide = (idx) => {
        for (let el2 of sec_slides.children) {
            el2.style.display = "none";
        }

        elements_list[idx].style.display = "";
    };

    let current_slide = 0;

    let counter = 0;
    for (let element of sec_slides.children) {
        if (element.classList.contains("slide")) {
            let title = element.getAttribute("data-slide-title");
            element.setAttribute("data-slide-index", counter);
            elements_list.push(element);

            const _counter_copy = counter;
            let button = document.createElement("button");
            button.innerText = title;
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

    window.addEventListener("keydown", (ev) => {
        if (ev.key == "ArrowRight") {
            if (current_slide < elements_list.length - 1) {
                current_slide += 1;
                selectSlide(current_slide);
            }
        } else if (ev.key == "ArrowLeft") {
            if (current_slide > 0) {
                current_slide -= 1;
                selectSlide(current_slide);
            }
        }
    });
};
