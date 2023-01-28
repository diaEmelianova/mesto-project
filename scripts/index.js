const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const profileCloseButton = document.querySelector('.button-close');
const profileForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const bigImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const popupImage = document.querySelector('.popup_image');


//открытие и закрытие popup//
function openPopup(elem) {
  elem.classList.add('popup_opened');
};

function closePopup(elem) {
  elem.classList.remove('popup_opened');

};

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(profilePopup)
});
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));


//редактирование информации о себе//

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

//2. Шесть карточек «из коробки»//
const initialCards = [
  {
    name: 'Кападокия',
    link: 'https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1612257460705-e0d24b7a4808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Озеро Прагс',
    link: 'https://images.unsplash.com/photo-1660201367471-9fc0cb34734f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Высокий лес',
    link: 'https://images.unsplash.com/photo-1512036849132-48508f294900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    name: 'Гранд каньон',
    link: 'https://images.unsplash.com/photo-1586167742648-569a69f7f9d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Япония',
    link: 'https://images.unsplash.com/photo-1505440484611-23c171ad6e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80'
  }
];


const elementTemplate = document.querySelector('#card');
const elementContainer = document.querySelector('.elements__item');

function createCard(title, link) {
  const newCard = elementTemplate.content.cloneNode(true);
  const image = newCard.querySelector('.element__image');

  newCard.querySelector('.element__title').textContent = title;
  image.alt = title;
  image.src = link;

  newCard.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  newCard.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  image.addEventListener('click', function (evt) {
    bigImage.setAttribute('src', link);
    bigImage.setAttribute('alt', title);
    popupFigcaption.textContent = title;
    openPopup(popupImage)
  });

  return newCard;
}

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

initialCards.forEach(element => {
  elementContainer.append(createCard(element.name, element.link));
});


//3. Форма добавления карточки//
const popupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup__add');
const popupAddCloseButton = document.querySelector('#popupAddCloseButton');

popupAddButton.addEventListener('click', () => openPopup(popupAdd));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));


//4. Добавление карточки
const linkNewCard = document.querySelector('#linkNewCard');
const nameNewCard = document.querySelector('#nameNewCard');
const buttonCreateNewCard = document.querySelector('#buttonCreateCard');
const popupFormAddCard = document.querySelector('#popupFormAddCard');



function addCard(evt) {
  evt.preventDefault();
  elementContainer.prepend(createCard(nameNewCard.value, linkNewCard.value));
  closePopup(popupAdd);
  evt.target.reset();

} 

popupFormAddCard.addEventListener('submit', addCard);
