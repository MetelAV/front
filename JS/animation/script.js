// Функция для изменения цвета фона сайта при клике на параграф
document.querySelector('p').addEventListener('click', function () {
    // Меняем цвет фона сайта
    document.body.style.backgroundColor = "#f7c4d7"; // нежный розовый

    // Чтобы через некоторое время фон снова стал оригинальным
    setTimeout(() => {
        document.body.style.backgroundColor = "#d4e6f3"; // очень светлый голубой
    }, 2000); // через 2 секунды вернем обратно
});

// Функция для плавного показа таблицы при клике на кнопку
// Получаем элементы
document.getElementById('showLecturesButton').addEventListener('click', function() {
    var lectures = document.getElementById('lectures');
    if (lectures.style.display === 'block') {
        lectures.style.display = 'none';
        lectures.style.opacity = 0;
        lectures.style.maxHeight = '0';
    } else {
        lectures.style.display = 'block';
        setTimeout(function() {
            lectures.style.opacity = 1;
            lectures.style.maxHeight = '1000px'; // Set a high enough value for the max height
        }, 10); // Small delay to ensure the display property is set before starting the animation
    }
});
// Обработчик события для формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы (перезагрузка страницы)

    // Показываем сообщение
    const message = document.getElementById('form-message');
    message.classList.remove('hidden'); // Убираем класс 'hidden'
    message.classList.add('visible'); // Добавляем класс 'visible' для анимации

    // Очистить форму (опционально)
    document.getElementById('contactForm').reset();
});


