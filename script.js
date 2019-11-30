const form = document.forms.register;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const telInput = form.elements.tel;
const urlInput = form.elements.url;
debugger;
console.log(nameInput.value);
const regexName = /^([А-Я][а-яё]+)(-)?([А-Я]?[а-яё]*)?$/;
const regexEmail = /^([\dA-Za-z\.-]{2,})+@([A-Za-z\.-]{2,})+\.([A-Za-z]{2,6})$/;
const regexTel = /^(\+)?(\d)\s?(\()?(\d{3})(\))?\s?-?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/;
const regexUrl = /^(http(s)?:\/\/)(w{3}\.)?(\d*\.\d*\.\d*\.\d*)?(([A-Za-z\.-]{2,})\.([A-Za-z]{2,6}))?(:\d{2,5})?\/?([\dA-Za-z\/]+#?)?$/;

function validate() {
    nameInput.setAttribute('pattern', `${regexName}`);
    emailInput.setAttribute('pattern', `${regexEmail}`);
    telInput.setAttribute('pattern', `${regexTel}`);
    urlInput.setAttribute('pattern', `${regexUrl}`);
} 

validate();

nameInput.addEventListener('input', event => {
    console.log(nameInput.value);
        function matchRegExp() {debugger;
            let name = nameInput.value;
            name.match(regexName);
            console.log(name.match(regexName));
            console.log(name.length);
        }
        return matchRegExp();
});

emailInput.addEventListener('input', event => {
    console.log(emailInput.value);
        function matchRegExp() {debugger;
            let email = emailInput.value;
            email.match(regexEmail);
            console.log(email.match(regexEmail));
            console.log(email.length);            
        }
        return matchRegExp();
});

telInput.addEventListener('input', event => {
    console.log(telInput.value);
        function matchRegExp() {debugger;
            let tel = telInput.value;
            tel.match(regexTel);
            console.log(tel.match(regexTel));
            console.log(tel.length);            
        }
        return matchRegExp();
});

urlInput.addEventListener('input', event => {
    console.log(urlInput.value);
        function matchRegExp() {debugger;
            let url = urlInput.value;
            url.match(regexUrl);
            console.log(url.match(regexUrl));
            console.log(url.length);            
        }
        return matchRegExp();
});

// const match = matchRegExp();