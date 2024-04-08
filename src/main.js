import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchCards } from './js/pixabay-api';

import { getMarkup } from './js/render-functions';

const searchForm = document.querySelector('.form');
const imageList = document.querySelector('.image-list');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearchFormSubmit);

const instance = new SimpleLightbox('.card-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'caption',
});

function onSearchFormSubmit(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.search.value.trim();
  e.currentTarget.elements.search.value = '';

  imageList.innerHTML = '';
  toggleLoader();

  fetchCards(searchQuery)
    .then(data => {
      renderCards(data);
    })
    .then(() => toggleLoader());
}

function renderCards({ hits }) {
  if (!hits.length) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
  const markup = getMarkup(hits);
  imageList.insertAdjacentHTML('beforeend', markup);
  instance.refresh();
}

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}
