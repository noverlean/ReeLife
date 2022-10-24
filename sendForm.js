var _email = document.getElementById('email');
var _name = document.getElementById('name');

var GenerateCode = () => String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10));

var type;

BuyType("Latte");

function BuyType(_type){
    type = _type;
}

function Send(){
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
        '<label class="checkMail">Проверьте почту!!!</label>'
    );
    
    $.ajax({
        url: 'senderToEmail.php',
        method: 'post',
        dataType: 'json',
        data: {
            name: _name.value,
            email: _email.value,
            type: type,
            code: this.code
        },
        success: function(data){
                alert(data.text);    /* выведет "Текст" */
                alert(data.error);   /* выведет "Ошибка" */
        }
    });

    console.log(_name.value);
    console.log(_email.value);
    console.log(type);
    console.log(code);
}

function ChangeLength()
{
    if (_name.value.length > 3 && _email.value.length > 7)
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