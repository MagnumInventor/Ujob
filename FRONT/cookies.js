document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");
  
    // Показ банера через 1 секунду
    setTimeout(() => {
      cookieBanner.classList.remove("hidden");
      cookieBanner.classList.add("visible");
    }, 1000);
  
    // Закриття банера
    const closeBanner = () => {
      cookieBanner.classList.remove("visible");
      cookieBanner.classList.add("hidden");
      setTimeout(() => (cookieBanner.style.display = "none"), 400);
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
  