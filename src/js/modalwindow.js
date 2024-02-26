document.addEventListener('DOMContentLoaded', function() {
    const userLink = document.querySelector('.h-user');
    const modal = document.getElementById('modal');
    const closeModalIcon = modal.querySelector('.modalclose');


    function openModal() {
        modal.style.opacity = "1"; 
        modal.style.visibility = "visible"; 
    }


    function closeModal() {
        modal.style.opacity = "0"; 
        modal.style.visibility = "hidden"; 
    }


    userLink.addEventListener('click', openModal);


    closeModalIcon.addEventListener('click', closeModal);
});
