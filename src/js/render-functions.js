//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.

export default function createMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li>
    <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" width="360" height="155"/>
    </a>
        <ul class="characteristics">
            <li>Likes<br> <span class="span">${likes}</span></li>
            <li>Views<br> <span class="span">${views}</span></li>
            <li>Comments<br> <span class="span">${comments}</span></li>
            <li>Downloads<br> <span class="span">${downloads}</span></li>
        </ul>
    </li>`;
      }
    )
    .join('');
}
