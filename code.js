let templateLetter = '<input type="checkbox" class="block-inner__checkbox">\n' +
    '<img class="block-inner__pic" alt="logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">\n' +
    '<span class="block-inner__sender block-inner__unread">Команда Яндекс.Почты</span>\n' +
    '<div class="block-inner__msg-mark block-inner__mark-unread"></div>\n' +
    '<span class="block-inner__message block-inner__unread">Just a simple test';
let time = "</span>\n" + '<time class="block-inner__date-msg" datetime="2019-03-16">16 мар</time>\n';


let testLetter = '<input type="checkbox" class="block-inner__checkbox">' +
    '<img class="block-inner__pic" alt="logo"' +
    'src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">' +
    '<span class="block-inner__sender block-inner__unread">Команда Яндекс.Почты</span>' +
    '<div class="block-inner__msg-mark block-inner__mark-unread"></div>' +
    '<span class="block-inner__message block-inner__unread">Как читать почту с' +
    'мобильногоiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</span>' +
    '<time class="block-inner__date-msg" datetime="2018-07-06">6 июл</time>';

let count = 0
function addLetter() {
    let test = document.querySelector('.block-inner__letters')
    let letters = test.childNodes;
    var newLetter = document.createElement('div');
    newLetter.classList.add("block-inner__bottom-borders");
    newLetter.classList.add("msg-added");
    newLetter.innerHTML = templateLetter + " " + (++count) + time;
    test.insertBefore(newLetter, letters[0]);
}

function deleteMsgs(toDelete) {
    for (var i = 0; i < toDelete.length; i++) {
        toDelete[i].remove();
    }
}

function deleteLetter() {
    let checkboxes = document.querySelectorAll('.block-inner__checkbox');
    var toDelete = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var parent = checkboxes[i].parentElement;
            toDelete.push(parent);
            if (Math.random() > 0.5) {
                parent.classList.add("msg-deleted-right");
            } else {
                parent.classList.add("msg-deleted-left");
            }
        }
    }
    setTimeout(deleteMsgs, 1000, toDelete);
}

document.getElementById('actions__button-write').addEventListener("click", addLetter);
document.getElementById('block-inner__delete').addEventListener("click", deleteLetter);
