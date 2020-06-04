const inputName = document.querySelector('#input-name');
// click Event - change elements after the click
inputName.addEventListener('click', event => {
    let labelName = document.querySelector('#label-name');
    console.log(labelName);
    if(labelName.classList.contains('active')){
        labelName.classList.remove('active');
    } else {
        labelName.classList.add('active');
    }
});
const inputMail = document.querySelector('#input-mail');

inputMail.addEventListener('click', event => {
    let labelMail = document.querySelector('#label-mail');
    console.log(labelMail);
    if(labelMail.classList.contains('active')){
        labelMail.classList.remove('active');
    } else {
        labelMail.classList.add('active');
    }
});
const inputCompany = document.querySelector('#input-company');

inputCompany.addEventListener('click', event => {
    let labelCompany = document.querySelector('#label-company');
    console.log(labelCompany);
    if(labelCompany.classList.contains('active')){
        labelCompany.classList.remove('active');
    } else {
        labelCompany.classList.add('active');
    }
});
const inputSubject = document.querySelector('#input-subject');

inputSubject.addEventListener('click', event => {
    let labelSubject = document.querySelector('#label-subject');
    console.log(labelSubject);
    if(labelSubject.classList.contains('active')){
        labelSubject.classList.remove('active');
    } else {
        labelSubject.classList.add('active');
    }
});
const inputMessage = document.querySelector('#input-message');

inputMessage.addEventListener('click', event => {
    let labelMessage = document.querySelector('#label-message');
    console.log(labelMessage);
    if(labelMessage.classList.contains('active')){
        labelMessage.classList.remove('active');
    } else {
        labelMessage.classList.add('active');
    }
});

// const remover = document.querySelector('.input-text');
// remover.addEventListener('click', event => {
//     document.querySelector('.label').style.color = '#ffffff';
//     document.querySelector('.label').style.fontSize = '14px';
// });