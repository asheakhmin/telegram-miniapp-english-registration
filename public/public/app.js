const tg = window.Telegram.WebApp;

// раскрываем Mini App на весь экран
tg.expand();

// проверка: получаем данные пользователя
console.log("Telegram user:", tg.initDataUnsafe.user);

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("registerBtn");

  if (!btn) {
    console.error("Button not found");
    return;
  }

  btn.addEventListener("click", () => {
    const user = tg.initDataUnsafe.user;

    alert(
      `Mini App работает!\n\n` +
      `Имя: ${user.first_name}\n` +
      `Username: @${user.username || "—"}`
    );
  });
});
