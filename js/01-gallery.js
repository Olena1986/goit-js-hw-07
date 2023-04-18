import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  galleryItem.appendChild(link);

  link.insertAdjacentHTML('afterbegin', `<img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"/>`);

  return galleryItem;
};


const renderGallery = galleryItems => {
  const galleryElements = galleryItems.map(createGalleryItem);

  galleryList.append(...galleryElements);
};

let instance = null;

const openModal = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageURL = event.target.dataset.source;
  instance = basicLightbox.create(`<img src="${largeImageURL}" alt="">`);
  instance.show();
};

galleryList.addEventListener('click', openModal);

const closeModal = () => {
  instance.close();
};

const onEscKeyPress = event => {
  if (event.code === "Escape" && instance && instance.visible()) {
    closeModal();
  }
};

document.addEventListener("keydown", onEscKeyPress);

renderGallery(galleryItems);







