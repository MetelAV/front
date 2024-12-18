const modalToggle = () => {
    document.querySelector('.modal-container').classList.toggle('hidden');
}
document.addEventListener("DOMContentLoaded", function () {
    Inputmask({
        mask: "+7 (999) 999-99-99"
    }).mask(document.getElementById("phone"));
});