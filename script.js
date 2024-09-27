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
  firstNameElement.textContent = user.first_name;
  lastNameElement.textContent = user.last_name || '';
  userIdElement.textContent = user.id;
  // usernameElement.textContent = `Юзернейм: ${user.username || 'не указан'}`;

  // Проверяем наличие фотографии профиля
  // if (user.photo_url) {
  //   // Загружаем изображение, чтобы проверить его доступность
  //   const img = new Image();

  //   img.src = user.photo_url;
  //   img.onload = function() {
  //     userPhotoElement.src = user.photo_url;
  //     userPhotoElement.style.display = 'block';
  //   }
  //   img.onerror = function() {
  //     console.error('Не удалось загрузить изображение пользователя.');
  //   }
  // }
} else {
  console.error('Не удалось получить данные пользователя.');
}

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.footer-nav__item');

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Удаляем класс is-active у всех элементов
      navItems.forEach(i => i.classList.remove('is-active'));
      
      // Добавляем класс is-active к текущему элементу
      this.classList.add('is-active');
    });
  });
});
