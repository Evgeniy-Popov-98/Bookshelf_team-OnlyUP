document
  .querySelector('.h-user-mobail .signup-button')
  .addEventListener('click', function () {
    const modalWrap = document.querySelector('.window');
    modalWrap.style.display = 'block';

    const overlay = document.querySelector('.modal-overlay');
    overlay.style.display = 'block';

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    // Додамо обробник подій для кліку на всьому документі
    document.addEventListener('click', function (event) {
      // Перевіряємо, чи клік не відбувся в межах модального вікна
      if (!modalWrap.contains(event.target)) {
        closeModal();
      }
    });

    const registrationForm = document.querySelector('#registrationForm');
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = registrationForm.elements['username'].value;
      const email = registrationForm.elements['email'].value;
      const password = registrationForm.elements['password'].value;

      // Показуємо повідомлення за допомогою IZITOAST
      izitoast.success({
        title: 'Success',
        message: 'Your registration was successful!',
        position: 'topRight', // позиція повідомлення
        timeout: 3000, // тривалість відображення повідомлення в мілісекундах
      });

      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      closeModal();
    });

    // Додамо функцію для закриття модального вікна
    function closeModal() {
      modalWrap.style.display = 'none';
      overlay.style.display = 'none';

      // Видаляємо обробник події для кнопки close
      closeBtn.removeEventListener('click', closeModal);
    }
  });
