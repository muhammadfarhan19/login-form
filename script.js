const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');
const username = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');
const loginButton = document.getElementById('btn-login');
const failedAlert = document.querySelector('.alert-warning');
const successAlert = document.querySelector('.alert-success');
const registerButton = document.getElementById('btn-regiter');
const firstPassword = document.getElementById('inputPassword1')
const secPassword = document.getElementById('inputPassword2');
const input = document.querySelectorAll('.form-control');
const switchForm = document.querySelectorAll('.switch-form');

loginButton.addEventListener('click', () => {
  // if (username.value == 0) {
  //   failedAlert.classList.remove('d-none');
  //   failedAlert.innerHTML = 'Input username!'
  // } else if (password.value == 0) {
  //   failedAlert.classList.remove('d-none');
  //   failedAlert.innerHTML = 'Input password!'
  // } else {
  //   loginSuccess();
  // }

  function formChecking() {
    input.forEach(el => {
      if (el.value == 0) {
        el.classList.add('border-3');
      }
    });
  }
  formChecking();
  loginSuccess();
});

function loginSuccess() {
  failedAlert.classList.add('d-none');
  successAlert.classList.remove('d-none')
  username.value = '';
  password.value = '';
}

registerButton.addEventListener('click', () => {
  if (secPassword !== firstPassword) {
    document.getElementById('error').classList.remove('d-none');
  }
})

function formChecking() {
  input.forEach(el => {
    if (el.value == 0) {
      el.classList.add('border-3');
    }
  });
}

switchForm.forEach(el => {

  el.addEventListener('click', () => {
    // if (loginForm.classList.contains('d-none')) {
  //   loginForm.classList.remove('d-none');
  //   registerForm.classList.add('d-none');
  // } else if (registerForm.classList.contains('d-none')) {
  //   registerForm.classList.remove('d-none');
  //   loginForm.classList.add('d-none');
  // }
  loginForm.classList.toggle('d-none')
  registerForm.classList.toggle('d-none')
})
});