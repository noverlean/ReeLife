var reloadInterval = setInterval(ReloadList, 2500);

var container = document.getElementById("listContainer");

function ReloadList(){
    container.innerHTML = "";

    LoadList();
}

function LoadList(){
    var result;

    $.ajax({
        url: '../GetRecords.php',
        method: 'get',
        dataType: 'json',
        success: function(data){
                result = JSON.parse(data);
        }
    });

    console.log(result);
    
    result.forEach(record => {
        container.insertAdjacentHTML(
            'afterbegin',
            '<div class="order">' +
            '    <div class="id">' + record.id + '</div>' +
            '    <div class="name">' + record.name + '</div>' +
            '    <div class="code">' + record.code + '</div>' +
            '    <div class="type">' + record.type + '</div>' +
            '</div>'
        );
    });
    
}

