fetch('http://ergast.com/api/f1/2019/1/driverstandings.json')
    .then(response => response.json())
    .then(data => console.log(data));