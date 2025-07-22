// Простой слайдер изображений
let currentSlide = 0;
let totalSlides = 0;

// Инициализация слайдера
function initSlider() {
    const slideTrack = document.getElementById('slideTrack');
    const slides = slideTrack.querySelectorAll('.slide');
    totalSlides = slides.length;
    
    console.log('Слайдер инициализирован с', totalSlides, 'изображениями');
    
    // Добавляем обработчики событий
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    
    // Обработчики для точек навигации
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Клавиатурная навигация
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    updateSlider();
}

// Переход к следующему слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Переход к предыдущему слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Переход к конкретному слайду
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

// Обновление слайдера
function updateSlider() {
    const slideTrack = document.getElementById('slideTrack');
    const imageCounter = document.getElementById('imageCounter');
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');
    
    // Перемещение слайд-трека
    const translateX = -currentSlide * 100;
    slideTrack.style.transform = `translateX(${translateX}%)`;
    
    // Обновление счетчика
    imageCounter.textContent = `Автомобиль ${currentSlide + 1} из ${totalSlides}`;
    
    // Обновление активной точки
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Обновление активного слайда
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Запуск слайдера после загрузки страницы
document.addEventListener('DOMContentLoaded', initSlider);