//! У файлі main.js знаходиться вся логіка роботи додатка.

// Бібліотека Axios
import axios from 'axios';

// import з pixabay-api
import fetchData from '../src/js/pixabay-api';

// import з render-functions
import createMarkup from '../src/js/render-functions';

// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Пошук елементів форми та список, кнопки Load more
const searchForm = document.querySelector('.search-form');
const searchLoading = document.querySelector('.loader');
export const searchInput = document.querySelector('.search-input');
const list = document.querySelector('ul');
const loadMoreButton = document.querySelector('.load-more-button');

// page
let page = 1;

// handleSubmit
function handleSubmit(event) {
  event.preventDefault();
  // console.log(page);

  if (searchInput.value.trim() === '') {
    return;
  }

  createLoader();

  fetchData(searchInput.value.trim())
    .then(data => {
      list.innerHTML = ''; // Очищення попередніх результатів перед вставкою нових
      list.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      lightbox.refresh();

      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
      } else {
        // Показати кнопку "Load more"
        loadMoreButton.classList.remove('none');
      }
    })
    .catch(error => alert(error))
    .finally(() => {
      removeLoader();
    });
}

// Додаємо слухача події на форму
searchForm.addEventListener('submit', handleSubmit);

// Додаємо слухача події на кнопку Load more
loadMoreButton.addEventListener('click', handleLoadMore);

// handleLoadMore
async function handleLoadMore() {
  page += 1;
  // console.log(page);

  loadMoreButton.disabled = true;

  try {
    const data = await fetchData(searchInput.value.trim(), page);
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();
    loadMoreButton.disabled = false;
  } catch (error) {
    alert(error.message);
  }
}

// Функція для створення елемента loader
export function createLoader() {
  searchLoading.classList.remove('none');
}

// Функція для видалення елемента loader
export function removeLoader() {
  searchLoading.classList.add('none');
}
