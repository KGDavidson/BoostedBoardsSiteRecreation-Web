function scrolled() {
    if (scrollY > 28) {
        document
            .getElementsByClassName("navBar")[0]
            .toggleAttribute("stuck", true);
    } else {
        document
            .getElementsByClassName("navBar")[0]
            .toggleAttribute("stuck", false);
    }
}

window.addEventListener("scroll", scrolled, false);
