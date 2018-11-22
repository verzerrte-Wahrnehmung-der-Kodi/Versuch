

function getData(){
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML= '';

axios.get('http://xkcd.com/614/info.0.json')
.then(function(response) {
  resultElement.innerHTML = createSuccessHTMLOutput(response);
})
.catch(function(error) {
  resultElement.innerHTML = createErrorHTMLOutput(error);
});
}

function createSuccessHTMLOutput(response){
  return '<div>'+response.status+ '' + response.statusText + '</div>' +
          // '<div>'+ JSON.stringify(response.headers, null, '\t')  + '</div>' +
          '<div>'+ JSON.stringify(response.data, null, '\t')  + '</div>' 

}
function createSErrorHTMLOutput(response){
  return '<div>'+response.status+ '' + response.statusText + '</div>' +
          // '<div>'+ JSON.stringify(response.headers, null, '\t')  + '</div>' +
          '<div>'+ JSON.stringify(response.data, null, '\t')  + '</div>' 

}