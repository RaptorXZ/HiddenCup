function navDropdown() {
    document.querySelector("#navDropArrow").classList.toggle("fa-caret-up");
    document.querySelector("#tournamentDropdown").classList.toggle("showDropdown");
}

window.onclick = function(event) {
    if (!event.target.matches('.navDropBtn')) {
        var dropdown = document.querySelector("#tournamentDropdown");
        if (dropdown.classList.contains('showDropdown')) {
            dropdown.classList.remove('showDropdown');
        }
    }

    if (!event.target.matches('.navDropBtn')) {
        var dropArrow = document.querySelector("#navDropArrow");
        if (dropArrow.classList.contains('fa-caret-up')) {
            dropArrow.classList.remove('fa-caret-up');
        }
    }
}