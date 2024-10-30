// Обработчик события для кнопки меню
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    const lines = this.querySelectorAll('.line');
    const body = document.body;

    // Меняем состояние отображения меню
    if (getComputedStyle(menu).display === 'none' || getComputedStyle(menu).display === '') {
        menu.style.display = 'flex'; // Показать меню
        body.style.overflow = 'hidden'; // Отключить прокрутку страницы
    } else {
        menu.style.display = 'none'; // Скрыть меню
        body.style.overflow = ''; // Восстановить прокрутку страницы
    }

    // Изменяем иконку гамбургера
    if (menu.style.display === 'flex') {
        lines[0].classList.add('hide'); // Скрываем верхнюю линию
        lines[1].classList.add('move-up'); // Поднимаем левую сторону средней линии
        lines[1].classList.add('move-down'); // Опускаем правую сторону средней линии
        lines[2].classList.add('rotate'); // Убираем поворот нижней линии
    } else {
        lines[0].classList.remove('hide'); // Показываем верхнюю линию
        lines[1].classList.remove('move-up'); // Возвращаем среднюю линию
        lines[1].classList.remove('move-down'); // Возвращаем среднюю линию
        lines[2].classList.remove('rotate'); // Убираем поворот нижней линии
    }
});

// Обработчик события для кнопки переключения темы
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text'); // Элемент для изменения текста

    // Переключаем класс темы
    body.classList.toggle('dark-theme');

    // Меняем иконку и текст в зависимости от текущей темы
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon'); // Убираем иконку луны
        themeIcon.classList.add('fa-sun'); // Добавляем иконку солнца
        themeText.textContent = 'День'; // Изменяем текст на "Светлая тема"
        avatar.src = "fonts/lin2.jpg"; // Меняем источник на аватар темной темы
    } else {
        themeIcon.classList.remove('fa-sun'); // Убираем иконку солнца
        themeIcon.classList.add('fa-moon'); // Добавляем иконку луны
        themeText.textContent = 'Ночь'; // Изменяем текст на "Темная тема"
        avatar.src = "fonts/lin.jpg"; // Меняем источник на аватар светлой темы
    }
});
