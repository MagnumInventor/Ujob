// Дочекатися завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    const vacancyButton = document.getElementById('open-vacancy-button');
    const cardBody = document.getElementById('card-body');

    // Додавання обробника подій для кнопки
    vacancyButton.addEventListener('click', () => {
        cardBody.classList.toggle('active');
    });
});
