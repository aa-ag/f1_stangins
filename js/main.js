/* Third and final approach (from class): JS only, using API */

async function getJSON(){

    season = document.getElementsByName('season')[0].value;
    round = document.getElementsByName('round')[0].value;
    console.log(season)
    console.log(round)

    await fetch(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
        .then(data => data.json())
        .then(rawData => {

            for(let i = 0; i < 7; i++){
                let pos = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
                document.getElementById(`pos${i.toString()}`).innerHTML = pos;
            }

            for(let i = 0; i < 7; i++){
                let driver = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
                document.getElementById(`driver${i.toString()}`).innerHTML = driver;
            }

            for(let i = 0; i < 7; i++){
                let country = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
                document.getElementById(`nationality${i.toString()}`).innerHTML = country;
            }

            for(let i = 0; i < 7; i++){
                let team = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
                document.getElementById(`team${i.toString()}`).innerHTML = team;
            }

            for(let i = 0; i < 7; i++){
                let pts = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
                document.getElementById(`pts${i.toString()}`).innerHTML = pts;
            }
        })
        .catch(error => {
            if (error) {
                let error = ' Something went wrong. Please check your input. '
                document.body.append(error);
            }
        })
};

/* First approach: show that there's connection with the API
fetch('http://ergast.com/api/f1/2019/1/driverstandings.json')
    .then(response => response.json())
    .then(data => console.log(data)); */

/* Second approach: AJAX Manual
var exampleArray = [
    {'position':'1', 'name':'Hamilton', 'nationality':'British', 'sponsor':'Mercedes', 'points':'50'},
    {'position':'2', 'name':'Bottas', 'nationality':'Finnish', 'sponsor':'Mercedes', 'points':'45'},
    {'position':'3', 'name':'Verstappen', 'nationality':'Dutch', 'sponsor':'Red Bull', 'points':'40'},
]

async function buildTable(data){
    var table = document.getElementById('tableBody')
    var 

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

buildTable(exampleArray); */