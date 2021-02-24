function navDropdown() {
    document.getElementById("navDropArrow").classList.toggle("fa-caret-up");
    document.getElementById("tournamentDropdown").classList.toggle("showDropdown");
}

window.onclick = function(event) {
    if (!event.target.matches('.navDropBtn')) {
        var dropdown = document.getElementById("tournamentDropdown");
        if (dropdown.classList.contains('showDropdown')) {
            dropdown.classList.remove('showDropdown');
        }
    }

    if (!event.target.matches('.navDropBtn')) {
        var dropArrow = document.getElementById("navDropArrow");
        if (dropArrow.classList.contains('fa-caret-up')) {
            dropArrow.classList.remove('fa-caret-up');
        }
    }
}