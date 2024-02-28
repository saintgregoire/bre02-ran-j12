function selectColor(event) {
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor() {
    if (sessionStorage.getItem("selectedColor")) {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette) {
    let colors = palette;
    let headerDivs = document.querySelectorAll('header div');

    for (let i = 0; i < headerDivs.length; i++) {
        headerDivs[i].style.background = colors[i];
    }
}


window.addEventListener("DOMContentLoaded", function() {
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    let headerDivs = document.querySelectorAll('header div');

    for (let i = 0; i < headerDivs.length; i++) {
        let headerDiv = headerDivs[i];
        headerDiv.addEventListener('click', function() {
            selectColor(event);
        });
    }

    let divsMain = document.querySelectorAll('main > div > div');
    for (let i = 0; i < divsMain.length; i++) {
        let divMain = divsMain[i];
        divMain.addEventListener('click', function() {
            divMain.style.background = getSelectedColor();
        });
    }
});
