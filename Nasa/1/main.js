
    
function getData(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://xkcd.com/info.0.json', false );
    xmlHttp.send(null);
    console.log('response',xmlHttp.response );
    var obj=JSON.parse(xmlHttp.responseText);



}


