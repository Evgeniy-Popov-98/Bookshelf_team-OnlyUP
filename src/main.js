import { render } from './js/API/home';
import { homeCategory } from './js/API/selected';
const END_POINT = 'category';
const categoriesBooks = 'Graphic Books and Manga';
homeCategory(END_POINT, categoriesBooks);

render();
