


function getData(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY', false );
    xmlHttp.send(null);
    console.log('response',xmlHttp.response );
    var obj=JSON.parse(xmlHttp.responseText);


const values = [];
const arrLen = obj.near_earth_objects['2015-09-07'].length;
for (var i = 0; i<arrLen; i++){
values.push(obj.near_earth_objects['2015-09-07'][i].links.self);

}




console.log(obj.near_earth_objects['2015-09-07']);

//option 1
document.body.innerHTML= 'First 3 links:' + values.slice(0,3);



// //option 2
// document.querySelector('#getResult1').innerHTML = values;


}