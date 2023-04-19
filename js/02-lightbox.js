import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const renderGallery = items => {
  const galleryItems = items.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
      
    </li>
  `).join('');

  galleryList.insertAdjacentHTML('beforeend', galleryItems);
};


renderGallery(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',

});
   