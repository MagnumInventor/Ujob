document.addEventListener("DOMContentLoaded", () => {
    const cookieCard = document.getElementById("cookie-card");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");
  
    // Показ банера через 1 секунду
    setTimeout(() => {
      cookieCard.classList.remove("hidden");
      cookieCard.classList.add("visible");
    }, 1000);
  
    // Закриття банера
    const closeBanner = () => {
      cookieCard.classList.remove("visible");
      cookieCard.classList.add("hidden");
      setTimeout(() => (cookieCard.style.display = "none"), 400);
    };
  
    // Обробка кнопок
    acceptButton.addEventListener("click", () => {
      closeBanner();
      localStorage.setItem("cookiesAccepted", "true");
    });
  
    declineButton.addEventListener("click", () => {
      closeBanner();
      localStorage.setItem("cookiesAccepted", "false");
    });
  
    // Перевірка стану cookie
    if (localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "none";
    }
  });
  