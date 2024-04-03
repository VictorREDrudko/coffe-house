// *******БУРГЕР МЕНЮ*******
// переменные для Burger menu
const burgerMenu = document.querySelector('.menu_burger');
const modalMenu = document.querySelector('.modal__menu');
const header = document.querySelector('.header');
const main = document.querySelector('.main');

// Ссылки бургер меню
const linkFavorite = document.querySelector('.link_favorite');
const linkAbout = document.querySelector('.link_about');
const linkMobile = document.querySelector('.link_mobile');
const linkContact = document.querySelector('.link_contact');


// Функция открытия меню бургера
const openBurgermenu = () => {
	if(burgerMenu.classList.contains('burger_active')) {
		modalMenu.style["transform"] = "translateX(100%)";
	}

	setTimeout(() => {
		burgerMenu.classList.toggle('burger_active');
		modalMenu.classList.toggle('modal__menu__active');
		modalMenu.style["transform"] = "translateX(0%)";
		header.classList.toggle('active_header');
		main.classList.toggle('active_main');
	}, 180)
}

// При клике на иконку бургера вызываем меню
burgerMenu.addEventListener('click', openBurgermenu);

// Закрытие бургер меню при клике на ссылку
linkFavorite.addEventListener('click', openBurgermenu);
linkAbout.addEventListener('click', openBurgermenu);
linkMobile.addEventListener('click', openBurgermenu);
linkContact.addEventListener('click', openBurgermenu);









// ******КАРУСЕЛЬ*******
// ПЕРЕМЕННЫЕ
// Переменные слайдера
const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');
const sliderItem = document.querySelectorAll('.slider__item');
const slide = document.querySelectorAll('.slider_item_container');
// кнопки слайдера
const buttonSliderPrev = document.querySelector('.btn_prev');
const buttonSliderNext = document.querySelector('.btn_next');
// пагинация слайдера
const paginationSlide = document.querySelectorAll('.dots_item1');
// счетчик слайдов
let countSlider = 0;
// Переменная запрещающая пролистывание слайдера при многократном нажатии на кнопку
let stopMoveNext = true;
let stopMovePrev = true;


// АВТОМАТИЧЕСКИЙ СЛАЙДЕР
// ширина кнопки пагинации
let width = 0;
// Переменная добавления цвета (управляет интервалом)
let addColor;
// Переменная исчезновения цвета (управляет интервалом)
let removeColor;


function autoNextSlide() {
	paginationSlide[countSlider].classList.add('active-dot');
	// Добавление цвета кнопке пагинации
	addColor = setInterval(progressAddColor, 60);
}

autoNextSlide()


// Функция заполнения цветом 
function progressAddColor() {
	if (width >= 100) {
		clearInterval(addColor);
		removeColor = setInterval(removeAddColor, 5);
	} else {
		width++;
		paginationSlide[countSlider].style.width = width + '%';
	}
}


// Функция исчезновения цвета на кнопке пагинации 
function removeAddColor() {
		if(width <= 0) {
			clearInterval(removeColor);
			paginationSlide[countSlider].style.width = 0 + '%';
			width = 0;
			moveNextSlide()
		} else {
			width--;
			paginationSlide[countSlider].style.width = width + '%';
		}
}


function removeAddColorPrev() {
	if(width <= 0) {
		clearInterval(removeColor);
		paginationSlide[countSlider].style.width = 0 + '%';
		width = 0;
		movePrevSlide();
	} else {
		width--;
		paginationSlide[countSlider].style.width = width + '%';
	}
}



// Функция движения слайдов вперед (next)
function moveNextSlide() {
	countSlider++;
	// Перелистывание слайдов с конца в начало
	if (countSlider >= sliderItem.length) {
		countSlider = 0;
	}
	autoNextSlide()
	moveSlide();
	stopMoveNext = true;
}

// Функция движения слайдов назад (prev)
function movePrevSlide() {
	countSlider--;
	// Перелистывание слайдов с начала в конец
	if(countSlider < 0) {
		countSlider = sliderItem.length - 1;
	}
	autoNextSlide()
	moveSlide();
	stopMovePrev = true;
}

// Функция на какое расстояние листать слайды
function moveSlide() {
	sliderLine.style.transform = `translateX(${countSlider * (-100 / sliderItem.length)}%)`;
}

// Функция приостановки слайдера
function stopSlider() {
	clearInterval(addColor);
}

// Функция запуска слайдера после приостановки
function playSlider() {
	addColor = setInterval(progressAddColor, 60);
}


// Слушатель на нажатие кнопок слайдера
buttonSliderNext.addEventListener('click', nextSlide);
buttonSliderPrev.addEventListener('click', prevSlide);
// остановка слайдера при наведении
slider.addEventListener('touchstart', stopSlider);
slider.addEventListener('touchend', playSlider);
slider.addEventListener('mousemove', stopSlider);
slider.addEventListener('mouseleave', playSlider);

// Функция движения слайдов вперед по нажатию кнопки
function nextSlide() {
	if(stopMoveNext) {
		clearInterval(addColor);
		removeColor = setInterval(removeAddColor, 5);
	}
	stopMoveNext = false;
}

// Функция движения слайдов назад
function prevSlide() {
	if(stopMovePrev) {
	clearInterval(addColor);
	removeColor = setInterval(removeAddColorPrev, 5);
	}
	stopMovePrev = false;
}




// РЕАЛИЗАЦИЯ СВАЙПА НА МОБИЛКЕ
// Переменные координат касания и движения
let x1 = 0;
let y1 = 0;
// Перещитываемые координаты при движении относительно последней точки
let x2 = 0;
let y2 = 0;
// Статичная переменная начальной координаты Х
let x1Const = 0;
// Окончательная позиция сдвига
let positionFinal = 0;
// Регулярное выражение
let regular = /([-0-9.]+(?=%))/
// Ширина sliderLine
let widthSlider = sliderLine.offsetWidth;
// Процент смещения
let percentMove = null;
// Порог сдвига слайда
let standard = widthSlider / sliderItem.length * 0.20;
// Разрешить пролистывать слайды
let swipeYes = true;


// Вешаем событие при прикосновении
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);


// Функция определения координат первого касания
function swipeStart(event) {
	// Значение переменных начальных координат при прикосновении
	x1 = event.touches[0].clientX;
	y1 = event.touches[0].clientY;
	// Присваиваем переменной первоначальную координату по Х
	x1Const = x1;
	// Убираем плавность 
	sliderLine.style.transition = '';
	// отслеживание других событий на документе
	slider.addEventListener('touchmove', swipeMove);
	slider.addEventListener('touchend', swipeEnd);
	// slider.addEventListener('mousemove', swipeMove);
	// slider.addEventListener('mouseup', swipeEnd);
}



// Функция протягивания 
function swipeMove(event) {
	x2 = Math.round(x1 - event.touches[0].clientX);
	x1 = event.touches[0].clientX;

	y2 = Math.round(y1 - event.touches[0].clientY);
	y1 = event.touches[0].clientY;

	// Текущее положение (transform)
	let currentTransformDate = sliderLine.style.transform;
	if(!currentTransformDate) {
		currentTransformDate = 'translateX(0%)'
	}
	// определяем трансформацию с помощью регулярного выражения и превращаем в число
	let transformDate = +currentTransformDate.match(regular)[0];

	// двигаем слайд
	sliderLine.style.transform = `translateX(${transformDate - (x2 * 100 / widthSlider)}%)`;
}


// Заершение swipe
function swipeEnd() {
	// крайняя позиция курсора
	positionFinal = x1Const - x1;

	slider.removeEventListener('touchmove', swipeMove);
  slider.removeEventListener('touchend', swipeEnd);

	// Условия для определения переключения слайда (в какую сторону) или оставить его
	if(swipeYes) {
		// убираем знак минус у positionFinal и сравниваем с порогом сдвига слайда
		if(Math.abs(positionFinal) > standard) {
			// если мы тянули вправо, то переходим на предыдущий слайд
			if(x1Const < x1) {
				prevSlide();
			}
			// если мы тянули влево, то переходим на следующий слайд
			if(x1Const > x1) {
				nextSlide();
			}
			// если курсор не двигался, то ничего не делаем
			// if (posInit == posX1) {
			// 	return;
			// }
		}

		if(Math.abs(positionFinal) <= standard) {
			moveSlide();
		}
	}
}



