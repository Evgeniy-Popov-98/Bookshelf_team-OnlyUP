import { getBooks } from './js/API/api-books';
import {renderBooks} from './js/API/home';


document.addEventListener('DOMContentLoaded', async function(){
    const data = await getBooks('top-books');
    console.log(data);
    // renderBooks(data.books);
})
