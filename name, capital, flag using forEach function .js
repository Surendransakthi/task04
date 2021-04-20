var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true);

req.send();
var data;
req.onload=function(){
data=JSON.parse(this.response);
data.forEach(count=>
    {
    console.log(`${count.name}- ${count.capital}- ${count.flag}`)
})
}
