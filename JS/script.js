// Функция вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}


function setH1FromUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    
    if (utmTerm) {
        h1.textContent = utmTerm;
    } else {
        h1.textContent = 'Добро пожаловать!';
    }
}

// Функция вывода текущего времени
function logCurrentTime() {
    const now = new Date();
    const formattedTime = now.toTimeString().split(" ")[0];
    console.log(`Текущее время: ${formattedTime}`);
}

// Функция сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Порядок вызова функций
document.addEventListener("DOMContentLoaded", () => {
    showMessage("Скрипт загружен!");
    logCurrentTime();

    resetBackgroundColor();
    changeBackgroundColor("lightblue");

    toggleVisibility(".content");

    handleUtmTerm();
});
