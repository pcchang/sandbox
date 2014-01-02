function fade(btnElement) {
    if (btnElement.value === "Fade Out") {
        document.getElementById("myImg").className = "fade-out";
        btnElement.value = "Fade In";
    }
    else {
        document.getElementById("myImg").className = "fade-in";
        btnElement.value = "Fade Out";
    }
}
