// fetch('http://ergast.com/api/f1/2019/1/driverstandings.json')
//     .then(response => response.json())
//     .then(data => console.log(data));

// http://ergast.com/api/f1/${year}/${round}/driverstandings.json

var exampleArray = [
    {'position':'1', 'name':'Hamilton', 'nationality':'British', 'sponsor':'Mercedes', 'points':'50'},
    {'position':'2', 'name':'Bottas', 'nationality':'Finnish', 'sponsor':'Mercedes', 'points':'45'},
    {'position':'3', 'name':'Verstappen', 'nationality':'Dutch', 'sponsor':'Red Bull', 'points':'40'},
]

function buildTable(data){
    var table = document.getElementById('tableBody')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].position}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].nationality}</td>
                        <td>${data[i].sponsor}</td>
                        <td>${data[i].points}</td>
                    </tr>`
        table.innerHTML += row
    }
}

buildTable(exampleArray)