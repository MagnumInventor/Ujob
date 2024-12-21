document.addEventListener('DOMContentLoaded', () => {
    const vacancyButton = document.getElementById('open-vacancy-button');
    const cardBody = document.getElementById('card-body');

    if (vacancyButton && cardBody) {
        vacancyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Запобігаємо перезавантаженню сторінки
            cardBody.classList.toggle('active');
            console.log('Тиснули на кнопку, клас активується:', cardBody.classList.contains('active'));
        });
    } else {
        console.error('Елементи button або card-body не знайдено!');
    }
});
