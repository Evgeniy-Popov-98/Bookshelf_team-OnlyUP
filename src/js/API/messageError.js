import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function errorMessage(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        });
    
}