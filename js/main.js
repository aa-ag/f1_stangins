/* Third & final approach: JS only, using API */

async function getJSON(){

    season = document.getElementsByName('season')[0].value;
    round = document.getElementsByName('round')[0].value;
    console.log(season)
    console.log(round)

    await fetch(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
        .then(data => data.json())
        .then(rawData => {console.log(rawData.MRData.total)

            for(let i = 0; i < 7; i++){
                let position = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
                display_position = document.createElement('tr');
                display_position.innerHTML = position;
                document.body.append(display_position)
            }

            for(let i = 0; i < 7; i++){
                let name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
                display_name = document.createElement('tr');
                display_name.innerHTML = name;
                document.body.append(display_name)
            }

            for(let i = 0; i < 7; i++){
                let country = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
                display_country = document.createElement('tr');
                display_country.innerHTML = country;
                document.body.append(display_country)
            }

            for(let i = 0; i < 7; i++){
                let team = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
                display_team = document.createElement('tr');
                display_team.innerHTML = team;
                document.body.append(display_team)
            }

            for(let i = 0; i < 7; i++){
                let accumulated_points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
                display_accumulated_points = document.createElement('tr');
                display_accumulated_points.innerHTML = accumulated_points;
                document.body.append(display_accumulated_points)
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