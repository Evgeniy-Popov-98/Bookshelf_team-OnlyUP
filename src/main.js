
import { render } from './js/API/home';
import { homeCategory } from './js/API/selected';
const END_POINT = 'category';
const categoriesBooks = 'Graphic Books and Manga';
homeCategory(END_POINT, categoriesBooks);

render();

import { getBooks } from './js/API/api-books';
import './js/API/modal';
// import './js/switch-button';
import { renderCategoriesList } from './js/API/all-categories';
import './js/NZheader';

renderCategoriesList();


