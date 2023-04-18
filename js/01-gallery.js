import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.dataset.source = original;
  image.alt = description;

  link.appendChild(image);
  galleryItem.appendChild(link);

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

console.log(galleryItems);


const handleGalleryClick = event => {
  event.preventDefault();

  const galleryItem = event.target.closest('.gallery__item');
  if (!galleryItem) return;

  const largeImageUrl = galleryItem.querySelector('.gallery__image').dataset.source;
  console.log(largeImageUrl);
};

galleryList.addEventListener('click', handleGalleryClick);


