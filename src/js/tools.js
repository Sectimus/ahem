function getTextLength(text, element="span") {
    let temp = document.createElement(element)
    temp.style.visibility = 'hidden';
    temp.innerHTML = text;
    document.body.appendChild(temp);
    let width = temp.offsetWidth;
    document.body.removeChild(temp);
    return width;
}

export {getTextLength};