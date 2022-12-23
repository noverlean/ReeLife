window.onload = buildProducts(); //products.length

function buildProducts(){
    for (var i = 0; i < menu.length; i++){
        document.querySelector('.products').insertAdjacentHTML(
            'afterbegin',
            '<div class="currentProduct">' +
            '    <div class="title">' +
            '        <div class="name">' + menu[i].title + '</div>' +
            '        <div class="price">' + menu[i].price + '$</div>' +
            '    </div>' +
                menu[i].content +
            '    <div class="buyBtn" onclick="SaveType(`' + menu[i].title + '`)">ЗАКАЗАТЬ</div>' +
            '</div>'
        );
    }          
}