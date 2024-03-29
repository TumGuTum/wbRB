document.addEventListener("DOMContentLoaded", function() {
  new Rellax('.rellax');
    const hoverArea = document.querySelector(".hover-area");
    let lastX = null;
    let lastY = null;
    let currentIndex = 0; // Индекс текущего элемента массива
    let isCreatingDigit = false; // Флаг, указывающий, создается ли в данный момент цифра
  
    hoverArea.addEventListener("mousemove", function(event) {
      if (isCreatingDigit) return; // Если уже создается цифра, выходим из обработчика
  
      if (lastX === null || lastY === null) {
        lastX = event.clientX;
        lastY = event.clientY;
        return;
      }
  
      const deltaX = event.clientX - lastX;
      const deltaY = event.clientY - lastY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
      if (distance >= 90) { // Проверяем, превысило ли перемещение 3 см (90 пикселей)
        lastX = event.clientX;
        lastY = event.clientY;
  
        isCreatingDigit = true; // Устанавливаем флаг в true, чтобы предотвратить создание других цифр
  
        const arrow = document.createElement("div");
        arrow.classList.add("arrow");

  
        const x = event.clientX - hoverArea.offsetLeft;
        const y = event.clientY - hoverArea.offsetTop;
  
        arrow.style.left = x + "px";
        arrow.style.top = y + "px";
  
        hoverArea.appendChild(arrow);
  
        // Создание и добавление цифры
        const numbers = ["Предел—это число.", "тОрты", "π=3,1415926", "7*8=56", "sin 2π=0"]; // Пример массива с несколькими элементами
        const number = numbers[currentIndex];
        if (number !== undefined) { // Проверяем, есть ли следующий элемент в массиве
          const digit = document.createElement("div");
          digit.classList.add("digit");
          digit.textContent = number;
          digit.style.left = x + "px";
          digit.style.top = y + "px";
          digit.style.fontSize = "25px"; // Увеличиваем размер цифр
          hoverArea.appendChild(digit);
  
          // Плавное появление
          digit.animate(
            [
              { opacity: 0, transform: "scale(0.5)" }, // Начальные стили
              { opacity: 1, transform: "scale(1)" } // Конечные стили
            ],
            {
              duration: 500, // Продолжительность анимации
              easing: "ease-out", // Функция анимации
              fill: "both" // Задаем конечные стили
            }
          );
  
          // Плавное исчезновение
          setTimeout(() => {
            digit.animate(
              [
                { opacity: 1, transform: "scale(1)" }, // Начальные стили
                { opacity: 0, transform: "scale(0.5)" } // Конечные стили
              ],
              {
                duration: 500, // Продолжительность анимации
                easing: "ease-in", // Функция анимации
                fill: "both" // Задаем конечные стили
              }
            ).onfinish = () => {
              digit.remove();
              isCreatingDigit = false; // Устанавливаем флаг обратно в false, позволяя создавать новые цифры в следующий раз
            };
          }, 1000); // Увеличиваем время исчезновения после появления
          
          currentIndex++; // Увеличиваем индекс для следующего элемента массива
        } else {
          // Если все элементы массива отображены, сбрасываем индекс
          currentIndex = 0;
          isCreatingDigit = false; // Устанавливаем флаг обратно в false, чтобы начать генерацию заново
        }
  
        // Удаление стрелочки
        setTimeout(function() {
          arrow.remove();
        }, 500);
      }
    });
  });

