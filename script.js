let vAgree,vEmail,vPass = false;

let btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let mail = document.querySelector('#mail');
    let password = document.querySelector('#password');
    let checkbox = document.querySelector('#checkbox');
    isValid(mail, password, checkbox);
    Next(vEmail,vPass,vAgree)
})
function Next(vEmail,vPass,vAgree){
    if (vEmail == true && vPass == true && vAgree == true )
        {
            alert(12131313);
            window.location.href = "./Profile.html";
        }
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function isValid(mail, password, checkbox) {
    if (EMAIL_REGEXP.test(mail.value)) {
        mail.style.border = '2px solid black';
        document.querySelector('.color-mail').classList.remove('color-error');
        document.querySelector('#star-mail').style.color = '#787878';
        document.querySelector('.valid-mail').classList.remove('valid');
        vEmail = true;
    } else {
        mail.style.border = '3px solid #CB2424';
        document.querySelector('.color-mail').classList.add('color-error');
        document.querySelector('.valid-mail').classList.add('valid');
        document.querySelector('#star-mail').style.color = '#CB2424';
        vEmail = false;
        if (mail.value.length == 0) {
            document.querySelector('.valid-mail').innerHTML = 'Поле обязательно для заполнения';
            vEmail = false;
        } else {
            document.querySelector('.valid-mail').innerHTML = 'Email невалидный';
            vEmail = false; 
        }
    }
    if (password.value.length < 8) {
        document.querySelector('.valid-password').classList.add('valid');
        document.querySelector('.color-password').classList.add('color-error');
        password.style.border = '3px solid #CB2424';
        document.querySelector('#star-password').style.color = '#CB2424';
        vPass = false;
        if (password.value.length == 0) {
            document.querySelector('.valid-password').innerHTML = 'Поле обязательно для заполнения';
            vPass = false;
        } else {
            document.querySelector('.valid-password').innerHTML = 'Пароль должен содержать как минимум 8 символов';
            vPass = false;
        }
    } else {
        document.querySelector('.valid-password').classList.remove('valid');
        document.querySelector('.color-password').classList.remove('color-error');
        document.querySelector('#star-password').style.color = '#787878';
        password.style.border = '2px solid black';
        vPass = true;
    }

    if (!checkbox.checked) {
        document.querySelector('.valid-checkbox').classList.add('valid');
        document.querySelector('.custom-checkbox').style.borderColor = '#CB2424';
        document.querySelector('#star-checkbox').style.color = '#CB2424';
        vAgree = false;
    } else {
        document.querySelector('.valid-checkbox').classList.remove('valid');
        document.querySelector('.custom-checkbox').style.borderColor = '#787878';
        document.querySelector('#star-checkbox').style.color = '#787878';
        vAgree = true;
    }
    
}