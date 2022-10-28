window.onload = (localStorage.components = []);

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

var components = [];

var CheckOver = () => (currentMl + addMl) > maxMl;

var UpdateML = () => mlCount.innerHTML = currentMl + " ml";

function IncCount(){
    if (addMl + incStep + currentMl <= maxMl){
        addMl += incStep;
        addMlCount.innerHTML = addMl + " ml";
    } 
}

function DecCount(){
    if (addMl - incStep > 10){
        addMl -= incStep;
        addMlCount.innerHTML = addMl + " ml";
    }
}

function AddCoffee(){
    if (CheckOver() == false){
        currentMl += addMl;
        components.push('coffee: ' + addMl);
        UpdateComponents();
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
        components.push('milk: ' + addMl);
        UpdateComponents();
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
        components.push('syrup: ' + addMl);
        UpdateComponents();
        UpdateML();

        document.querySelector('.conteiner').insertAdjacentHTML(
            'afterbegin',
            '<div class="syrup" style="height:' + addMl + 'px;"></div>'
        );
    }
}

function ClearCup(){
    currentMl = 0;
    components = [];
    UpdateComponents();
    UpdateML();

    document.querySelector('.conteiner').innerHTML = "";
}

function UpdateComponents(){
    localStorage.components = components;
}