let btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let mail = document.querySelector('#mail');
    let password = document.querySelector('#password');
    let checkbox = document.querySelector('#checkbox');
    isValid(mail, password, checkbox)
})
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function isValid(mail, password, checkbox) {
    if (EMAIL_REGEXP.test(mail.value)) {
        mail.style.border = '2px solid black';
        document.querySelector('.color-mail').classList.remove('color-error');
        document.querySelector('#star-mail').style.color = '#787878';
        document.querySelector('.valid-mail').classList.remove('valid');
    } else {
        mail.style.border = '3px solid #CB2424';
        document.querySelector('.color-mail').classList.add('color-error');
        document.querySelector('.valid-mail').classList.add('valid');
        document.querySelector('#star-mail').style.color = '#CB2424';
        if (mail.value.length == 0) {
            document.querySelector('.valid-mail').innerHTML = 'Поле обязательно для заполнения';
        } else {
            document.querySelector('.valid-mail').innerHTML = 'Email невалидный'; 
        }
    }
    if (password.value.length < 8) {
        document.querySelector('.valid-password').classList.add('valid');
        document.querySelector('.color-password').classList.add('color-error');
        password.style.border = '3px solid #CB2424';
        document.querySelector('#star-password').style.color = '#CB2424';
        if (password.value.length == 0) {
            document.querySelector('.valid-password').innerHTML = 'Поле обязательно для заполнения';
        } else {
            document.querySelector('.valid-password').innerHTML = 'Пароль должен содержать как минимум 8 символов';
        }
    } else {
        document.querySelector('.valid-password').classList.remove('valid');
        document.querySelector('.color-password').classList.remove('color-error');
        document.querySelector('#star-password').style.color = '#787878';
        password.style.border = '2px solid black';
    }

    if (!checkbox.checked) {
        document.querySelector('.valid-checkbox').classList.add('valid');
        document.querySelector('.custom-checkbox').style.borderColor = '#CB2424';
        document.querySelector('#star-checkbox').style.color = '#CB2424';
    } else {
        document.querySelector('.valid-checkbox').classList.remove('valid');
        document.querySelector('.custom-checkbox').style.borderColor = '#787878';
        document.querySelector('#star-checkbox').style.color = '#787878';
    }
    
}