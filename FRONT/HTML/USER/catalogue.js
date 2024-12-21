// === Dropdown Menu Handling ===

// Елементи для взаємодії
const buttonCheckmarkSorting = document.getElementById('button-menu-catalogue-sorting');
const dropdownSorting = document.getElementById('dropdown-sorting');
const dropdownBurgerSorting = document.getElementById('burger-menu-catalogue-sorting');

// Функція для відкриття/закриття меню
function toggleSortingMenu() {
    dropdownSorting.classList.toggle('active');
    buttonCheckmarkSorting.classList.toggle('active');
    dropdownBurgerSorting.classList.toggle('active');
}

// Додавання обробника подій до кнопки
buttonCheckmarkSorting.addEventListener('click', toggleSortingMenu);

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
