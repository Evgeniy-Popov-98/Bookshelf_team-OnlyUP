// Функція для створення HTML-структури модального вікна
import iziToast from 'izitoast';
function modalWindow() {
  return `
    <div id="myModal" class="modal" style="display: none;">
      <div class="modal-content">
        <span class="close">&times;</span>
        <form id="registrationForm">
          <div class="input-group">
            <input type="text" id="username" name="username" placeholder="NAME" required>
            <label for="username" class="icon"></label>
          </div>
          <div class="input-group">
            <input type="email" id="email" name="email" placeholder="EMAIL" required>
            <label for="email" class="icon">
              <img src="/src/images/mail-02.svg" alt="Email icon">
            </label>
          </div>
          <div class="input-group">
            <input type="password" id="password" name="password" placeholder="PASSWORD" required>
            <label for="password" class="icon">
              <img src="/src/images/lock-02.svg" alt="Password icon">
            </label>
          </div>
          <button type="submit">SIGN UP</button>
          <nav class="registration-nav"> 
            <div class="SIGN">SIGN UP</div>
            <div class="SIGN">SIGN IN</div>
          </nav>
        </form>
      </div>
    </div>
    <div class="modal-overlay" style="display: none;"></div>
  `;
}

document.querySelector('.signup-button').addEventListener('click', function () {
  const modalWrap = document.querySelector('h-user-mobail');
  modalWrap.innerHTML = modalWindow();

  const modal = modalWrap.querySelector('.modal');
  const overlay = document.querySelector('.modal-overlay'); // Змінив пошук overlay
  const closeBtn = modal.querySelector('.close');
  const registrationForm = modal.querySelector('#registrationForm');

  modal.style.display = 'block';
  overlay.style.display = 'block';

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });

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
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
});
