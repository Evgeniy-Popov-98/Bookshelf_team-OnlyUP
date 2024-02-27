
import refs from './API/refs';
export default

window.onscroll = () => {
    
    if (window.scrollY > 400) {
        refs.scrollTop.classList.remove('isShowScroll_hide');
    } else if (window.scrollY < 400) {
        refs.scrollTop.classList.add('isShowScroll_hide');
    }
};

refs.scrollTop.addEventListener('click', ()=> window.scrollTo(0, 0))