var _name = document.getElementById('name');

var GenerateCode = () => String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10));

function SaveType(type){
    if (type == "custom" && localStorage.components == []){
        alert("Для начала добавьте что-то в вашу кружку!!!");
    }
    else{
        localStorage.coffee = type;

        window.open('sendForm.html');
    }
}

function Send(){
    code = GenerateCode();
    
    var content = [];

    if (localStorage.getItem('coffee') == "custom"){
        // for(i = 0; i < localStorage.components.length - 1; i++){
        //     if (localStorage.components[i][0] == localStorage.components[i+1][0]){
        //         //localStorage.components[i+1] = localStorage.components[i+1].split(' ')[0] + " " + (parseInt(localStorage.components[i].split(' ')[1]) + parseInt(localStorage.components[i+1].split(' ')[1]));
        //         continue;
        //     }

        //     content.push(localStorage.components[i]);
        // }

        content = localStorage.components;
    }
    else{
        content = localStorage.coffee;
    }

    document.querySelector('.mainFrame').innerHTML = '';

    for(var i = 0; i < 4; i++){
        document.querySelector('.mainFrame').insertAdjacentHTML(
            'beforeend',
            '<div class="frame">' + code[i] + '</div>'
        );
    }

    document.getElementById('second').insertAdjacentHTML(
        'beforeend',
        '<label class="checkMail">Ваш секретный код...<br>Запомните его и предъявите его на кассе при оплате</label>'
    );
    
    $.ajax({
        url: '../php/newRecord.php',
        method: 'post',
        dataType: 'json',
        data: {
            name: _name.value,
            type: content,
            code: this.code
        }
    });
}

function ChangeLength()
{
    if (_name.value.length > 3)
    {
        if (document.getElementById('send') == null)
            document.getElementById('form').insertAdjacentHTML(
                'beforeend',
                '<a href="#code" class="submit" id="send" onclick="Send()">Send</a>'
            );
    }
    else
    {
        document.getElementById('send').remove();
    }
}