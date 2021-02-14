const form = document.forms.register;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const telInput = form.elements.tel;
const urlInput = form.elements.url;

const regexName = /^([А-Я][а-яё]+)(-?[А-Я][а-яё]+)?$/;
const regexEmail = /^([\dA-Za-z\.-]{2,})+@([A-Za-z\.-]{2,})+\.([A-Za-z]{2,6})$/;
const regexTel = /^(\+)?(\d)\s?(\()?(\d{3})(\))?\s?-?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/;
const regexUrl = /^(http(s)?:\/\/)(w{3}\.)?((\d+\.\d+\.\d+\.\d+)|(([A-Za-z\.-]{2,})\.([A-Za-z]{2,6})))(:\d{2,5})?\/?([\dA-Za-z\/]+#?)?$/;

document.querySelector('.form__button').
setAttribute('disabled', `disabled`);
document.querySelector('.form__button').
setAttribute('style', `background-color: #aba9a9;`);

form.addEventListener('input', event => {
    if (event.target.closest('.form__input')) {
        let valueName = event.target.getAttribute('name');
        
        switch (valueName) {
            case 'name':
                event.target.setAttribute('pattern', `${regexName}`);
                    if (nameInput.value.match(regexName) !== null) {
                        event.target.classList.add('form__inp');
                        event.target.nextElementSibling.classList.remove('form__in');
                        event.target.classList.remove('form__in');
                    } else {
                        event.target.classList.add('form__in');
                        event.target.nextElementSibling.classList.add('form__in');
                        event.target.nextElementSibling.classList.remove('form__inp');
                        event.preventDefault();
                    }
                break;
            case 'email':
                event.target.setAttribute('pattern', `${regexEmail}`);
                    if (emailInput.value.match(regexEmail) !== null) {
                        event.target.classList.add('form__inp');
                        event.target.nextElementSibling.classList.remove('form__in');
                        event.target.classList.remove('form__in');
                    } else {
                        event.target.classList.add('form__in');
                        event.target.nextElementSibling.classList.add('form__in');
                        event.target.nextElementSibling.classList.remove('form__inp');
                        event.preventDefault();
                    }
                break;
            case 'tel':
                event.target.setAttribute('pattern', `${regexTel}`);
                    if (telInput.value.match(regexTel) !== null) {
                        event.target.classList.add('form__inp');
                        event.target.nextElementSibling.classList.remove('form__in');
                        event.target.classList.remove('form__in');
                    } else {
                        event.target.classList.add('form__in');
                        event.target.nextElementSibling.classList.add('form__in');
                        event.target.nextElementSibling.classList.remove('form__inp');
                        event.preventDefault();
                    }   
                break;
            case 'url':
                event.target.setAttribute('pattern', `${regexUrl}`);
                    if (urlInput.value.match(regexUrl) !== null) {
                        event.target.classList.add('form__inp');
                        event.target.nextElementSibling.classList.remove('form__in');
                        event.target.classList.remove('form__in');
                    } else {
                        event.target.classList.add('form__in');
                        event.target.nextElementSibling.classList.add('form__in');
                        event.target.nextElementSibling.classList.remove('form__inp');
                        event.preventDefault();
                    }
                break;
        }
    }
    if ((nameInput.value.match(regexName) && emailInput.value.match(regexEmail) && 
        telInput.value.match(regexTel) && urlInput.value.match(regexUrl)) !== null) {
        document.querySelector('.form__button').
        removeAttribute('disabled');
        document.querySelector('.form__button').
        removeAttribute('style');
    } else {
        document.querySelector('.form__button').
        setAttribute('disabled', `disabled`);
        document.querySelector('.form__button').
        setAttribute('style', `background-color: #aba9a9;`);
    }
});

document.querySelector('.form__button').
addEventListener('click', event => {
    event.preventDefault();
    form.reset();
});