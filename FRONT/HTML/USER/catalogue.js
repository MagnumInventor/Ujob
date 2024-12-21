// Дочекатися завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    const vacancyButton = document.getElementById('open-vacancy-button');
    const cardBody = document.getElementById('card-body');

    if (vacancyButton && cardBody) { // Перевірка, чи існують елементи
        vacancyButton.addEventListener('click', () => {
            cardBody.classList.toggle('active'); // Переключення класу 'active'
            console.log('Тиснули на кнопку, клас активується:', cardBody.classList.contains('active'));
        });
    } else {
        console.error('Елементи button або card-body не знайдено!');
    }
});
