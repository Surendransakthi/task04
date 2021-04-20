var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true);

req.send();
var data;
req.onload=function(){
data=JSON.parse(this.response);
var asia = data.filter((count)=>count.region==='Asia')
console.log(asia);
}