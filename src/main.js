import { render } from './js/API/home';
import { homeCategory } from './js/API/selected';
const END_POINT = 'category';
const categoriesBooks = 'Handcover Fiction';
homeCategory(END_POINT, categoriesBooks);

render();
