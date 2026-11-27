// Находим форму и поле для вывода ошибки по их id
const form = document.querySelector(".game-form");
const errorBox = document.querySelector("#input-error");

// Вешаем обработчик на отправку формы (событие submit)
form.addEventListener("submit", function(event) {
  // Отменяем стандартную перезагрузку страницы браузером
  event.preventDefault();

  // Очищаем предыдущее сообщение об ошибке
  errorBox.textContent = "";

  // Получаем значения из полей ввода
  const titleInput = document.querySelector("#input-name");
  const hoursInput = document.querySelector("#input-hours");
  const scoreInput = document.querySelector("#input-score");

  // Читаем название и убираем лишние пробелы по краям
  const title = titleInput.value.trim();

  // Проверка: если название пустое, показываем подсказку и выходим
  if (title === "") {
    errorBox.textContent = "Введите название игры, чтобы добавить её в список.";
    return;
  }

  // Преобразуем строки из полей в числа
  const hours = Number(hoursInput.value);
  const score = Number(scoreInput.value);

  // Создаём новый объект игры с уникальным id на основе времени
  const newGame = {
    id: String(Date.now()),
    title: title,
    hours: hours,
    score: score
  };

  // Добавляем новую игру в общий массив данных
  games.push(newGame);

  // Перерисовываем весь список игр на странице
  renderLibrary();

  // Очищаем поля формы от введенных данных
  form.reset();

  // Возвращаем курсор в первое поле для быстрого ввода следующей игры
  titleInput.focus();
});
