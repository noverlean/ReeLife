function AddCoffeeTest(){
    var startList = document.getElementById('container').innerHTML;

    document.getElementById("coffee").click();

    setTimeout(() => {
        var endList = document.getElementById('container').innerHTML;

        if (startList != endList){
            console.log("Добавление выполняется!!!");
        }
        else{
            console.log("Добавление не выполняется!!!");
        }
    }, 2500);
}

function IncrementUpTest(){
    var startMl = addMl;

    document.getElementById("inc").click();

    if (addMl != startMl){
        console.log("Добавление выполняется!!!");
    }
    else{
        console.log("Добавление не выполняется!!!");
    }
}

function ScrollTest(){
    var startScroll = window.pageYOffset;
    var endScroll;

    document.getElementById("coffeeScroll").click();

    setTimeout(() => {
        endScroll = window.pageYOffset;

        if (document.getElementById("backgroun_pic").scrollHeight == endScroll){
            console.log("Прокрутка не выполняется!!!");
        }
        else{
            console.log("Прокрутка выполняется!!!");
        }
    }, 2500);
}

