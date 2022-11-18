var reloadInterval = setInterval(LoadList, 2500);

var container = document.getElementById("listContainer");

function LoadList(){
    var result;

    $.ajax({
        url: '../php/GetRecords.php',
        method: 'get',
        dataType: 'text',
        success: function(data){
                result = JSON.parse(data);

                records = Object.values(result);

                container.innerHTML = "";

                records.forEach(record => {
                    container.insertAdjacentHTML(
                        'afterbegin',
                        '<div class="order">' +
                        '    <div class="id">' + record[0] + '</div>' +
                        '    <div class="name">' + record[1] + '</div>' +
                        '    <div class="code">' + record[2] + '</div>' +
                        '    <div class="type">' + record[3] + '</div>' +
                        '    <image src="../image/basket.png" class="basket" onclick="DeleteRecordById(' + record[0] + ')"></div>' +
                        '</div>'
                    );
                });
        },
        fail: function(error){
            console.log(error.text);
        }
    });    
}

function DeleteRecordById(_id){
    $.ajax({
        url: '../php/deleteRecordById.php',
        method: 'post',
        dataType: 'json',
        data: {
            id: _id,
        },
        success: function(data){
            console.log(data);
        }
    }); 

    LoadList();
}

