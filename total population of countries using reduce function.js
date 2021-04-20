var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true);

req.send();
var data;
req.onload=function(){
data=JSON.parse(this.response);
var total=data.reduce((sum,cv)=>sum+cv.population,0);
     console.log(`${total}`);
}