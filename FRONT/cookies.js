document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieCard = document.getElementById("cookie-card");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  // Перевірка наявності елементів
  if (!cookieCard || !cookieBanner || !acceptButton || !declineButton) {
      console.error("Один або кілька елементів не знайдено!");
      return;
  }

  // Перевірка стану cookie
  if (!localStorage.getItem("cookiesAccepted")) {
      cookieCard.classList.remove("hidden");
      cookieCard.classList.add("visible");
      cookieBanner.classList.remove("hidden");
      cookieBanner.classList.add("visible");
  }

  // Закриття банера
  const closeBanner = () => {
      cookieCard.classList.remove("visible");
      cookieCard.classList.add("hidden");
      cookieBanner.classList.remove("visible");
      cookieBanner.classList.add("hidden");

      setTimeout(() => {
          cookieCard.style.display = "none";
          cookieBanner.style.display = "none";
      }, 400);
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
});
