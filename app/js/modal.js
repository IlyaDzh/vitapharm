function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
    document.body.parentNode.classList.add("modal-open");
}

function closeModal(id, removeHtmlClass = true) {
    const modal = document.getElementById(id);
    modal.classList.remove("show");
    if (removeHtmlClass) {
        document.body.parentNode.classList.remove("modal-open");
    }
}
