const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const bullets = document.querySelectorAll('.bullet');

let slideIndex = 0;

// Функция для отображения текущего слайда
function showSlide(index) {
    // Скрываем все слайды
    const allSlides = slides.querySelectorAll('img');
    allSlides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Показываем текущий слайд
    const currentSlide = slides.querySelectorAll('img')[index];
    currentSlide.style.display = 'block';

    // Отмечаем активный буллет
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
    bullets[index].classList.add('active');
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = 7; // Зацикливаем слайдер
    }
    showSlide(slideIndex);
}

// Функция для переключения на следующий слайд
function nextSlide() {
    slideIndex++;
    if (slideIndex > 7) {
        slideIndex = 0; // Зацикливаем слайдер
    }
    showSlide(slideIndex);
}

// Переключение на предыдущий слайд при клике на кнопку "Prev"
prevBtn.addEventListener('click', prevSlide);

// Переключение на следующий слайд при клике на кнопку "Next"
nextBtn.addEventListener('click', nextSlide);

// Переключение на выбранный слайд при клике на буллеты
bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

// Отображение первого слайда при загрузке страницы
showSlide(slideIndex);
