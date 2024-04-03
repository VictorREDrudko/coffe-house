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
const linkCoffeeMenu = document.querySelector('.link_modal_title_coffee_menu');

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
linkCoffeeMenu.addEventListener('click', openBurgermenu);





const dataJson = [
  {
    "name": "Irish coffee",
    "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Kahlua coffee",
    "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey raf",
    "description": "Espresso with frothed milk, cream and aromatic honey",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ice cappuccino",
    "description": "Cappuccino with soft thick foam in summer version with ice",
    "price": "5.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Espresso",
    "description": "Classic black coffee",
    "price": "4.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte",
    "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte macchiato",
    "description": "Espresso with frothed milk and chocolate",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Coffee with cognac",
    "description": "Fragrant black coffee with cognac and whipped cream",
    "price": "6.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Moroccan",
    "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    "price": "4.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ginger",
    "description": "Original black tea with fresh ginger, lemon and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cranberry",
    "description": "Invigorating black tea with cranberry and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Sea buckthorn",
    "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    "price": "5.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Marble cheesecake",
    "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    "price": "3.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Red velvet",
    "description": "Layer cake with cream cheese frosting",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cheesecakes",
    "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Creme brulee",
    "description": "Delicate creamy dessert in a caramel basket with wild berries",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Pancakes",
    "description": "Tender pancakes with strawberry jam and fresh strawberries",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey cake",
    "description": "Classic honey cake with delicate custard",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Chocolate cake",
    "description": "Cake with hot chocolate filling and nuts with dried apricots",
    "price": "5.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Black forest",
    "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    "price": "6.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  }
]

// Контейнер с карточками
const containerCards = document.querySelector('.items__row');
// кнопка дополнительных карточек
const additionallyCards = document.querySelector('.block_btn_cards');
// кнопки переключения товаров
const buttonChooseCategoryCoffee = document.querySelector('.btn_coffee');
const buttonChooseCategoryTea = document.querySelector('.btn_tea');
const buttonChooseCategoryDessert = document.querySelector('.btn_dessert');
// Коллекция карточек
let cards;
// Получаем в переменные модальные окна
const modalCoffee = document.querySelector('.modal__coffee');
const modalTea = document.querySelector('.modal__tea');
const modalDessert = document.querySelector('.modal__dessert');
// Счетчик активных карточек
let countActiveCard = 0;
// Элементы модального окна
const modalImg = document.querySelectorAll('.img_modal');
const modalTitle = document.querySelectorAll('.modal__title');
const modalText = document.querySelectorAll('.modal__text');
const modalPrice = document.querySelectorAll('.modal__text__price');
// Переменная кнопки закрытия модального окна
const buttonCloseModal = document.querySelectorAll('.button_modal');




// Функция coздания карточек и заполнения данными из dataJson
function addDateCards(dataJson) {
	for (const element of dataJson) {
		// Индекс элемента массива
		let index = dataJson.indexOf(element);

		// создадим карточку
		let card = document.createElement('div');
		let cardContainerImg = document.createElement('div');
		let cardImg = document.createElement('img');
		let cardContent = document.createElement('div');
		let cardContentText = document.createElement('div');
		let cardPrice = document.createElement('p');
		let cardName = document.createElement('h5');
		let cardText = document.createElement('p');

		// добавим карточке класс
		card.classList.add('card__item');
		cardContainerImg.classList.add('item__image');
		cardContent.classList.add('card__content');
		cardContentText.classList.add('card__content__text');
		cardPrice.classList.add('card_price');

		// cardName.classList.add('card_price');
		cardText.classList.add('card_text');

		// добавим вложенность
		containerCards.append(card);
		card.append(cardContainerImg);
		card.append(cardContent);
		cardContainerImg.append(cardImg);
		cardContent.append(cardContentText);
		cardContent.append(cardPrice);
		cardContentText.append(cardName);
		cardContentText.append(cardText);

		// заполним карточку
		cardImg.src = `img/menu/${element.category + index}.png`;
		cardName.textContent = element.name;
		cardText.textContent = element.description;
		cardPrice.textContent = `$${element.price}`;

		// Перезапишем коллекцию карточек
		cards = document.querySelectorAll('.card__item');
	}
}



addDateCards(dataJson)
// присвоим класс active категории coffee по умолчанию
buttonChooseCategoryCoffee.classList.add('active_btn');
showCards();
openCategoryCoffee();

// Функция показа карточек
function showCards() {
	for (const element of dataJson) {
		let index = dataJson.indexOf(element);
		cards[index].classList.add('del__item')
	}

	// проверим на наличие активного класса и выведем соответствующие карточки
	if (buttonChooseCategoryCoffee.classList.contains('active_btn')) {
		for (const element of dataJson) {
			let index = dataJson.indexOf(element);
			if (dataJson[index].category === 'coffee') {
				cards[index].classList.remove('del__item')
			}
		}
	}

	if (buttonChooseCategoryTea.classList.contains('active_btn')) {
		for (const element of dataJson) {
			let index = dataJson.indexOf(element);
			if (dataJson[index].category === 'tea') {
				cards[index].classList.remove('del__item')
			}
		}
	}

	if (buttonChooseCategoryDessert.classList.contains('active_btn')) {
		for (const element of dataJson) {
			let index = dataJson.indexOf(element);
			if (dataJson[index].category === 'dessert') {
				cards[index].classList.remove('del__item')
			}
		}
	}
}




// Функции открытия карточек
function openCategoryCoffee() {
	buttonChooseCategoryCoffee.classList.add('active_btn');
	buttonChooseCategoryDessert.classList.remove('active_btn');
	buttonChooseCategoryTea.classList.remove('active_btn');
	showCards()
	// Если карточек больше 4-х, то присвоить остальным класс
	sumActiveCard()

	additionallyCards.style.display = 'block';
	// addDateCards(arrayCardsCoffee);
}

function openCategoryTea() {
	buttonChooseCategoryCoffee.classList.remove('active_btn');
	buttonChooseCategoryDessert.classList.remove('active_btn');
	buttonChooseCategoryTea.classList.add('active_btn');
	showCards();
	sumActiveCard();

	additionallyCards.style.display = 'none';
	// addDateCards(arrayCardsTea);
}

function openCategoryDessert() {
	buttonChooseCategoryCoffee.classList.remove('active_btn');
	buttonChooseCategoryTea.classList.remove('active_btn');
	buttonChooseCategoryDessert.classList.add('active_btn');
	showCards();
	sumActiveCard();

	additionallyCards.style.display = 'block';
	// addDateCards(arrayCardsDesert);
}


buttonChooseCategoryCoffee.addEventListener('click', openCategoryCoffee);
buttonChooseCategoryTea.addEventListener('click', openCategoryTea);
buttonChooseCategoryDessert.addEventListener('click', openCategoryDessert);
// Вешаем слушатель на кнопку открытия дополнительных карточек
additionallyCards.addEventListener('click', openAdditionallyCards);


// Функция определения активных карточек и если их больше 4х присвоить оставшимся класс card__item1
function sumActiveCard() {
	for(let i = 0; i < cards.length; i++) {
		if (!cards[i].classList.contains('del__item')){
			countActiveCard++;
			if (countActiveCard > 4) {
				cards[i].classList.add('card__item1');
			}
		}
	}
	countActiveCard = 0;
}


// Функция открытия дополнительных карточек
function openAdditionallyCards() {
	for(let i = 0; i < cards.length; i++) {
		cards[i].classList.remove('card__item1');
	}
	additionallyCards.style.display = 'none';
}




// Функция открытия модального окна
function openModal() {
	// Убираем скролл страницы
	document.body.style.position = 'fixed';
	// блок с условиями для открытия нужного типа модального окна
	if (dataJson[indexClickCard].category === 'coffee') {
		modalCoffee.classList.add('modal__active');
	}
	
	if (dataJson[indexClickCard].category === 'tea') {
		modalTea.classList.add('modal__active');
	}

	if (dataJson[indexClickCard].category === 'dessert') {
		modalDessert.classList.add('modal__active');
	}
	// Заполнение данными модального окна из dataJson
	modalTitle.forEach((el) => {
		el.textContent = dataJson[indexClickCard].name;
	})
	
	modalText.forEach((el) => {
		el.textContent = dataJson[indexClickCard].description;
	})
	
	modalPrice.forEach((el) => {
		el.textContent = `$${dataJson[indexClickCard].price}`;
	})

	modalImg.forEach((el) => {
		el.src = `img/menu/${dataJson[indexClickCard].category + indexClickCard}.png`;
	})

	
	// Обнулим индекс карточки и передадим его в другую переменную
	indexForModal = indexClickCard;
	indexClickCard = null;	
}

// Функция закрытия модального окна
function closeModalAll(event) {
	const target = event.target
	if(target == modalCoffee || target == modalTea || target == modalDessert) {
		modalCoffee.classList.remove('modal__active');
		modalTea.classList.remove('modal__active');
		modalDessert.classList.remove('modal__active');
		additionalOptionSizeS.forEach((ind) => ind.classList.add('item__active'));
		additionalOptionSizeM.forEach((ind) => ind.classList.remove('item__active'));
		additionalOptionSizeL.forEach((ind) => ind.classList.remove('item__active'));

		additionalOptionAdditives1.forEach((ind) => ind.classList.remove('item__active'));
		additionalOptionAdditives2.forEach((ind) => ind.classList.remove('item__active'));
		additionalOptionAdditives3.forEach((ind) => ind.classList.remove('item__active'));
	}
	
	document.body.style.position = '';
	checkModalActive()
}

// Функция прокерки на класс modal__active
function checkModalActive() {
	if(modalCoffee.classList.contains('modal__active') || modalTea.classList.contains('modal__active') || modalDessert.classList.contains('modal__active')) {
		document.body.style.position = 'fixed';
	}
}


function closeModal(event) {
	modalCoffee.classList.remove('modal__active');
	modalTea.classList.remove('modal__active');
	modalDessert.classList.remove('modal__active');

	document.body.style.position = '';
	additionalOptionSizeS.forEach((ind) => ind.classList.add('item__active'));
	additionalOptionSizeM.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionSizeL.forEach((ind) => ind.classList.remove('item__active'));

	additionalOptionAdditives1.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionAdditives2.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionAdditives3.forEach((ind) => ind.classList.remove('item__active'));
}



// Создадим массив карточек
const arrayCards = Array.from(cards);
// Индекс карты по которой кликнули
let indexClickCard = null;
// Индекс карты по которой кликнули для переиспользования
let indexForModal = null;

// Определяем индекс карты по которой кликнули
arrayCards.forEach((card) => card.addEventListener('click', () => indexClickCard = arrayCards.indexOf(card)));
// Навешиваем слушатель на карточки
arrayCards.forEach((card) => card.addEventListener('click', openModal));
// Навешиваем слушатель на кнопку закрытия модального окна
buttonCloseModal.forEach((btn) => {btn.addEventListener('click', closeModal)});


modalCoffee.addEventListener('click', closeModalAll);
modalTea.addEventListener('click', closeModalAll);
modalDessert.addEventListener('click', closeModalAll);





// ВЗАИМОДЕЙСТВИЕ В МОДАЛЬНОМ ОКНЕ
// Переменные выбора размера и доп услуг
const additionalOptionSizeS = document.querySelectorAll('.sizeS');
const additionalOptionSizeM = document.querySelectorAll('.sizeM');
const additionalOptionSizeL = document.querySelectorAll('.sizeL');
const additionalOptionAdditives1 = document.querySelectorAll('.addit1');
const additionalOptionAdditives2 = document.querySelectorAll('.addit2');
const additionalOptionAdditives3 = document.querySelectorAll('.addit3');
// Переменная стоимости размера товара
let sum = 0;
// Переменные дополнительных услуг с 1 по 3
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;


// ФУНКЦИИ ВЫБОРА РАЗМЕРА ТОВАРА И ЦЕНЫ
function activeAdditionalOptionS() {
	additionalOptionSizeS.forEach((ind) => ind.classList.add('item__active'));
	additionalOptionSizeM.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionSizeL.forEach((ind) => ind.classList.remove('item__active'));
	sum = 0;
	// Цена итоговая товара
	modalPrice.forEach((el) => {
		el.textContent = `$${(Number(dataJson[indexForModal].price) + sum + sum1 + sum2 + sum3).toFixed(2)}`;
	}); 
}

function activeAdditionalOptionM() {
	additionalOptionSizeS.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionSizeM.forEach((ind) => ind.classList.add('item__active'));
	additionalOptionSizeL.forEach((ind) => ind.classList.remove('item__active'));
	sum = 0.5;
	modalPrice.forEach((el) => {
		el.textContent = `$${(Number(dataJson[indexForModal].price) + sum + sum1 + sum2 + sum3).toFixed(2)}`;  
	});

}

function activeAdditionalOptionL() {
	additionalOptionSizeS.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionSizeM.forEach((ind) => ind.classList.remove('item__active'));
	additionalOptionSizeL.forEach((ind) => ind.classList.add('item__active'));
	sum = 1;
	modalPrice.forEach((el) => {
		el.textContent = `$${(Number(dataJson[indexForModal].price) + sum + sum1 + sum2 + sum3).toFixed(2)}`;
	}); 
}

// Навешиваем слушатель на индикаторы выбора размера товара
additionalOptionSizeS.forEach((ind) => {ind.addEventListener('click', activeAdditionalOptionS)});
additionalOptionSizeM.forEach((ind) => {ind.addEventListener('click', activeAdditionalOptionM)});
additionalOptionSizeL.forEach((ind) => {ind.addEventListener('click', activeAdditionalOptionL)});





function activeAdditionalOptionS1() {
	additionalOptionAdditives1.forEach((ind) => ind.classList.toggle('item__active'));
	costAdditionalOption();
}

function activeAdditionalOptionS2() {
	additionalOptionAdditives2.forEach((ind) => ind.classList.toggle('item__active'));
	costAdditionalOption();
}

function activeAdditionalOptionS3() {
	additionalOptionAdditives3.forEach((ind) => ind.classList.toggle('item__active'));
	costAdditionalOption();
}



// Функция подсчета дополнительных товаров
function costAdditionalOption() {
	if(indexForModal >= 0 && indexForModal <= 7) {
		sum1 = 0;
		sum2 = 0;
		sum3 = 0;
		if(additionalOptionAdditives1[0].classList.contains('item__active')) {
			sum1 = 0.5;
		} 
		if(additionalOptionAdditives2[0].classList.contains('item__active')) {
			sum2 = 0.5;
		} 
		if(additionalOptionAdditives3[0].classList.contains('item__active')) {
			sum3 = 0.5;
		} 
	}

	if(indexForModal >= 8 && indexForModal <= 10) {
		sum1 = 0;
		sum2 = 0;
		sum3 = 0;
		if(additionalOptionAdditives1[1].classList.contains('item__active')) {
			sum1 = 0.5;
		} 
		if(additionalOptionAdditives2[1].classList.contains('item__active')) {
			sum2 = 0.5;
		} 
		if(additionalOptionAdditives3[1].classList.contains('item__active')) {
			sum3 = 0.5;
		} 
	}

	if(indexForModal >= 11) {
		sum1 = 0;
		sum2 = 0;
		sum3 = 0;
		if(additionalOptionAdditives1[2].classList.contains('item__active')) {
			sum1 = 0.5;
		} 
		if(additionalOptionAdditives2[2].classList.contains('item__active')) {
			sum2 = 0.5;
		} 
		if(additionalOptionAdditives3[2].classList.contains('item__active')) {
			sum3 = 0.5;
		} 
	}

	modalPrice.forEach((el) => {
		el.textContent = `$${(Number(dataJson[indexForModal].price) + sum + sum1 + sum2 + sum3).toFixed(2)}`;
	});
}


// Навешиваем слушатель на индикаторы выбора дополнительных услуг
additionalOptionAdditives1.forEach((ind) => {ind.addEventListener('click', activeAdditionalOptionS1)});
additionalOptionAdditives2.forEach((ind) => {ind.addEventListener('click', activeAdditionalOptionS2)});
additionalOptionAdditives3.forEach((ind) => {ind.addEventListener('click', activeAdditionalOptionS3)});



