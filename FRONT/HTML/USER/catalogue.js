// === Dropdown Menu Handling ===

// Елементи для взаємодії
const vacancyButton = document.getElementById('open-vacancy-button');
const openVacancyMenu = document.getElementById('card-body');

// Функція для відкриття/закриття меню
function toggleVacancyMenu() {
    vacancyButton.toggle('active');
    openVacancyMenu.toggle('active');
}

// Додавання обробника подій до кнопки
vacancyButton.addEventListener('click', toggleVacancyMenu);

// === Utility Functions (якщо необхідно) ===

// Функція для закриття меню при кліку поза ним
function closeMenuOnOutsideClick(event) {
    if (!dropdownSorting.contains(event.target) && !buttonCheckmarkSorting.contains(event.target)) {
        dropdownSorting.classList.remove('active');
        buttonCheckmarkSorting.classList.remove('active');
        dropdownBurgerSorting.classList.remove('active');
    }
}

// Додавання обробника подій для кліків поза меню
document.addEventListener('click', closeMenuOnOutsideClick);

// === Initialization ===

// Використовуйте, щоб додатково ініціалізувати меню чи інші компоненти (за потреби)
function initializeMenu() {
    console.log('Dropdown menu initialized');
}

// Виклик ініціалізації
initializeMenu();
