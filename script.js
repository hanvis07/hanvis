window.Telegram.WebApp.ready();

// Получаем данные пользователя из Telegram Web App
const user = window.Telegram.WebApp.initDataUnsafe.user;

// Проверяем, что данные пользователя существуют
if (user) {
  const firstNameElement = document.getElementById('firstName');
  const lastNameElement = document.getElementById('lastName');
  const userIdElement = document.getElementById('userId');
  const usernameElement = document.getElementById('username');
  const userPhotoElement = document.getElementById('userPhoto');

  // Заполняем информацию о пользователе
  firstNameElement.textContent = `Имя: ${user.first_name}`;
  lastNameElement.textContent = `Фамилия: ${user.last_name || 'не указана'}`;
  userIdElement.textContent = `ID: ${user.id}`;
  usernameElement.textContent = `Юзернейм: ${user.username || 'не указан'}`;

  // Проверяем наличие фотографии профиля
  if (user.photo_url) {
    // Загружаем изображение, чтобы проверить его доступность
    const img = new Image();
    
    img.src = user.photo_url;
    img.onload = function() {
      userPhotoElement.src = user.photo_url;
      userPhotoElement.style.display = 'block';
    }
    img.onerror = function() {
      console.error('Не удалось загрузить изображение пользователя.');
    }
  }
} else {
  console.error('Не удалось получить данные пользователя.');
}