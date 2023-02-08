
function changeColor(newColor) {
    var bodyElement = document.getElementById('page_color');
    if (newColor == 'black') {
        bodyElement.style.color = 'black';
        bodyElement.style.backgroundColor = 'white'
    }
    else {
        bodyElement.style.color = 'white';
        bodyElement.style.backgroundColor = 'black'
    }
}

function clickAlert() {
    alert('Hello World!');
}

