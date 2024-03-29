function openPopup(courseTitle, courseImage) {
    // Заполняем данные о курсе
    document.getElementById('course-title').innerText = courseTitle;
    document.getElementById('course-image').src = courseImage;

    // Отображаем всплывающее окно
    document.getElementById('popup').style.display = 'block';

    // Удаляем обработчики событий мыши на кнопках классов
    document.querySelectorAll('.btn-course_img').forEach(function(btn) {
      btn.removeEventListener('mousedown', stopPropagation);
    });
  }

  // Функция для закрытия всплывающего окна
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    
    // Добавляем обработчики событий мыши на кнопках классов
    document.querySelectorAll('.btn-course_img').forEach(function(btn) {
      btn.addEventListener('mousedown', stopPropagation);
    });
  }

  // Функция для остановки всплывания события мыши
  function stopPropagation(event) {
    event.stopPropagation();
  }

  // Обработчики событий мыши на кнопках классов
  document.querySelectorAll('.btn-course_img').forEach(function(btn) {
    btn.addEventListener('mousedown', stopPropagation);
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, было ли всплывающее окно открыто ранее
    var isPopupOpened = localStorage.getItem("popupOpened");

    // Если всплывающее окно было открыто ранее, скрываем его
    if (isPopupOpened) {
        document.querySelector(".popup").style.display = "none";
    }

    // Сохраняем информацию о том, что всплывающее окно было открыто
    localStorage.setItem("popupOpened", true);
});