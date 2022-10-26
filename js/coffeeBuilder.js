var coffee = document.getElementById('coffee');
var milk = document.getElementById('milk');
var syrup = document.getElementById('syrup');
var clear = document.getElementById('clear');

var inc = document.getElementById('inc');
var dec = document.getElementById('dec');

var mlCount = document.getElementById('mlCount');
var addMlCount = document.getElementById('addMlCount');

coffee.addEventListener("click", AddCoffee, false);
milk.addEventListener("click", AddMilk, false);
syrup.addEventListener("click", AddSyrup, false);
clear.addEventListener("click", ClearCup, false);

inc.addEventListener("click", IncCount, false);
dec.addEventListener("click", DecCount, false);

const maxMl = 290;
var currentMl = 0, addMl = 50;
var incStep = 10;

var CheckOver = () => (currentMl + addMl) > maxMl;

var UpdateML = () => mlCount.innerHTML = currentMl + " ml";

function IncCount(){
    if (addMl + incStep + currentMl <= maxMl){
        addMl += incStep;
        addMlCount.innerHTML = addMl + " ml";
    } 
}

function DecCount(){
    if (addMl - incStep > 0){
        addMl -= incStep;
        addMlCount.innerHTML = addMl + " ml";
    }
}

function AddCoffee(){
    if (CheckOver() == false){
        currentMl += addMl;
        UpdateML();

        document.querySelector('.conteiner').insertAdjacentHTML(
            'afterbegin',
            '<div class="coffee" style="height:' + addMl + 'px;"></div>'
        );
    }
}

function AddMilk(){
    if (CheckOver() == false){
        currentMl += addMl;
        UpdateML();

        document.querySelector('.conteiner').insertAdjacentHTML(
            'afterbegin',
            '<div class="milk" style="height:' + addMl + 'px;"></div>'
        );
    }
}

function AddSyrup(){
    if (CheckOver() == false){
        currentMl += addMl;
        UpdateML();

        document.querySelector('.conteiner').insertAdjacentHTML(
            'afterbegin',
            '<div class="syrup" style="height:' + addMl + 'px;"></div>'
        );
    }
}

function ClearCup(){
    currentMl = 0;
    UpdateML();

    document.querySelector('.conteiner').innerHTML = "";
}

function SendEmail(){
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });

    // $.ajax({
    //     type: 'POST',
    //     url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    //     data: {
    //     'key': 'YOUR API KEY HERE',
    //     'message': {
    //         'from_email': 'reelife.official@gmail.com',
    //         'to': [
    //             {
    //             'email': 'RECIPIENT@EMAIL.HERE',
    //             'name': 'RECIPIENT NAME (OPTIONAL)',
    //             'type': 'to'
    //             }
    //         ],
    //         'autotext': 'true',
    //         'subject': 'YOUR SUBJECT HERE!',
    //         'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
    //     }
    //     }
    //     }).done(function(response) {
    //     console.log(response); // if you're into that sorta thing
    //     });
}