var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true);

req.send();
var data;
req.onload=function(){
data=JSON.parse(this.response);
var newPopulation = data.filter((element) => {
    return element.population<200000;
})
console.log(newPopulation)
}