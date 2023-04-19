import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const renderGallery = items => {
  const galleryItems = items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');

  galleryList.insertAdjacentHTML('beforeend', galleryItems);
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







