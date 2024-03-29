document.getElementById('course-gallery1').style.display = 'block';

function showCourses(classNum) {
  // Скрываем все галереи
  var galleries = document.querySelectorAll('.course-gallery');
  galleries.forEach(function(gallery) {
    gallery.style.display = 'none';
  });
  
  // Показываем галерею для выбранного класса
  var selectedGallery = document.getElementById('course-gallery' + classNum);
  if (selectedGallery) {
    selectedGallery.style.display = 'block';
  }
}
document.getElementById('course-gallery1').style.display = 'block';

// Обработчик события для горизонтального прокручивания галереи
let isDown = false;
let startX;
let scrollLeft;

document.querySelectorAll('.course-gallery').forEach(function(item) {
  item.addEventListener('mousedown', function(e) {
    isDown = true;
    startX = e.pageX - item.offsetLeft;
    scrollLeft = item.scrollLeft;
  });
  item.addEventListener('mouseleave', function() {
    isDown = false;
  });
  item.addEventListener('mouseup', function() {
    isDown = false;
  });
  item.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - item.offsetLeft;
    const walk = (x - startX) * 1; // Чувствительность скролла, можно менять значение
    item.scrollLeft = scrollLeft - walk;
  });
});

function showCourses(classNum) {
  // Скрываем все галереи
  var galleries = document.querySelectorAll('.course-gallery');
  galleries.forEach(function(gallery) {
    gallery.style.display = 'none';
  });
  
  // Показываем галерею для выбранного класса
  var selectedGallery = document.getElementById('course-gallery' + classNum);
  if (selectedGallery) {
    selectedGallery.style.display = 'block';
  }
}