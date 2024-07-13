var carroussel_itens = document.querySelectorAll(".carroussel_item");
let currentIndex = 0;
var itemWidth = -108.95;
var click = false;
const intervalo = 4000;

function button_click(i) {

    click = true;
    carroussel(i);

    setInterval(function () {
        click = false;
    }, 4000);

}


setInterval(function () {
    if (!click) {
        carroussel(1);
    }
}, intervalo);



function carroussel(i) {

    if (i == 0) {
        currentIndex--;
    } else {
        itemWidth = -108.95;
        currentIndex++;
    }


    if (currentIndex > carroussel_itens.length/2) {
        currentIndex = 0;

    } else if (currentIndex <= 0) {
        currentIndex = carroussel_itens.length/2;
    }

    carroussel_itens.forEach((item, index) => {

        if (currentIndex == 0) {
            item.classList.remove("animation");
        } else {
            item.classList.add("animation");
        }
        var deslocamento = itemWidth * (currentIndex);

        item.style.transform = 'translateX(' + deslocamento + '%)';
    });


}




