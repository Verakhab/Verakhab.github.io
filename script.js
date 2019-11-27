const form = document.forms.register;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const telInput = form.elements.tel;
const urlInput = form.elements.url;

const regexName = /(^[А-Я]{1}[а-яё]+|^[А-Я]{1}[а-яё]+\-^[А-Я]{1}[а-яё]+)/;
const regexNEmail = /[^\s]+@[^\s\.]+\.[a-z]+/;
const regexTel = /\+?\d{1}\(\d{3}\)\s?\-?\d{3}\s?\-?\d{2}\s?\-?\d{2}/;
const regexUrl = /(http\:\/{1}\/{1}|https\:\/{1}\/{1})w{0,3}\.?\:?\d{0,5}(\d{3}\.\d{3}\.\d{3}\.\d{3}|stasbasov\.ru)\#?/;

function validate() {
    nameInput.setAttribute('pattern', `${regexName}`);
    emailInput.setAttribute('pattern', `${regexNEmail}`);
    telInput.setAttribute('pattern', `${regexTel}`);
    urlInput.setAttribute('pattern', `${regexUrl}`);
} 

validate();