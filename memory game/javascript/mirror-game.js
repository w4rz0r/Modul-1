

function swapContent(element, bilde) {
setTimeout(()=>swapContentDelay(element, bilde), 300)
}

function swapContentDelay(element, bilde) {
    if(element.innerHTML ===  `  <img class="spider" src="${bilde}">`) {
        element.innerHTML = '<img class="spider"  src="./images/349-3492792_card-back.png"></img>'
    }else {
        element.innerHTML = `  <img class="spider" src="${bilde}">`
    }
}
//shuffel hvordan får jeg til det 
