var _name = document.getElementById('name');

var GenerateCode = () => String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10));

function SaveType(type){
    localStorage.coffee = type;

    window.open('sendForm.html');
}

function Send(){
alert(localStorage.coffee);

    code = GenerateCode();

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
            type: localStorage.getItem('coffee'),
            code: this.code
        },
        success: function(data){
                alert(data.text);    /* выведет "Текст" */
                alert(data.error);   /* выведет "Ошибка" */
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