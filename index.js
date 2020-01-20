optional_Old = {
  name: 'master5G@gmail.com',
  password: 'master5G'
};

function goToLogin() {
  //note isi dule cnsole locale Storage //atau gunakan optioana_Old utk simulasi

  let email = document.getElementById('formInputName').value;
  let password = document.getElementById('formInputPassword').value;

  let emailRegistered = localStorage.getItem('emailRegistered');
  let passwordRegistered = localStorage.getItem('passwordRegistered');
  if (email !== emailRegistered && password !== passwordRegistered) {
    alert('YOU SHOULD REGISTERED since DONT HAVE MEMBER In COMUNITY!');
    window.location = 'register.html';
  } else {
    alert('you sucess to login');
    window.location = 'welcome.html';
  }
}

function goToRegister() {
  let email = document.getElementById('formInputName').value;
  let password = document.getElementById('formInputPassword').value;
  let checkEmail = ValidateEmail(email);
  let checkPassword = ValidatePassword();
  console.log(email);
  console.log(password);

  if (checkEmail !== true) {
    alarm();
  }
  if (checkPassword !== true) {
    alarm();
  }
  if (checkEmail == true && checkPassword == true) {
    localStorage.setItem('emailRegistered', email);
    localStorage.setItem('passwordRegistered', password);
  }

  function alarm() {
    Swal.fire({
      title: 'wrong email or password validation',
      text: 'please to correct input email',
      icon: 'error',
      confirmButtonText: 'Enter'
    });
  }
  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  }

  function ValidatePassword() {
    switch (true) {
      case document.getElementById('formInputPassword').value == '':
        alert('please fill the password & must > 6(char)');
        return false;
        break;
      case document.getElementById('formInputPassword').value.length < 6:
        return false;
        break;
      case document.getElementById('formInputPassword').value !== '' &&
        document.getElementById('formInputPassword').value.length >= 6:
        return true;
        break;
    }
  }
}

function LogOut() {
  localStorage.removeItem('Email');
  localStorage.removeItem('Password');
  alert('Successful logout!');
  window.location = 'login.html';
}
