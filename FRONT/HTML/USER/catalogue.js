
// CATALOGUW CREATION

// Функція для завантаження даних з JSON файлу
fetch('/Ujob/SERVER/DATA/USER/catalogue.json')
    .then(response => response.json())
    .then(data => {
        const project = data.project;
        const container = document.getElementById('projects-container');

        // Створюємо картку проекту
        const card = document.createElement('div');
        card.classList.add('card');

        // Додаємо заголовок картки
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.innerHTML = `<h2>${project.name}</h2>`;
        card.appendChild(cardHeader);

        // Додаємо опис проекту
        const vacancyInfo = document.createElement('div');
        vacancyInfo.classList.add('vacancy-info');
        vacancyInfo.id = 'vacancy-info';
        vacancyInfo.innerHTML = `<h3>Опис:</h3><p>${project.description}</p>`;
        card.appendChild(vacancyInfo);

        // Кнопка для вакансій
        const vacancyButton = document.createElement('button');
        vacancyButton.classList.add('open-vacancy-button');
        vacancyButton.id = 'open-vacancy-button';
        vacancyButton.type = 'button';
        vacancyButton.innerHTML = `
            <span class="check-left" id="check-left">&#11013;</span>
            ВІЛЬНІ ПОСАДИ
            <span class="check-right" id="check-right">&#11013;</span>
        `;
        card.appendChild(vacancyButton);

        // Додаємо список вакансій
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.id = 'card-body';
        project.vacancies.forEach(role => {
            const roleDiv = document.createElement('div');
            roleDiv.classList.add('role');
            roleDiv.textContent = role;
            cardBody.appendChild(roleDiv);
        });
        card.appendChild(cardBody);

        // Додаємо команду проекту
        const team = document.createElement('div');
        innerHTML = `<h3>Учасники проекту:</h3>`
        team.classList.add('team');
        project.team.forEach(member => {
            const teamMember = document.createElement('div');
            teamMember.classList.add('team-member');
            teamMember.innerHTML = `${member.name} <img src="${member.image}" alt="member-image">`;
            team.appendChild(teamMember);
        });
        card.appendChild(team);

        // Кнопка для перегляду детальної інформації
        const viewButton = document.createElement('button');
        viewButton.classList.add('view-button');
        viewButton.textContent = 'ДЕТАЛЬНІШЕ';
        card.appendChild(viewButton);

        // Додаємо картку в контейнер
        container.appendChild(card);

        // Додаємо функціональність для відкриття/закриття вакансій
        vacancyButton.addEventListener('click', () => {
            cardBody.classList.toggle('active');
            const checkMarkLeft = document.getElementById('check-left');
            const checkMarkRight = document.getElementById('check-right');
            checkMarkLeft.classList.toggle('active');
            checkMarkRight.classList.toggle('active');
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));





// INTERFACE

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
