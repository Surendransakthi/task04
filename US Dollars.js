var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true);

req.send();
var data;
req.onload=function(){
data=JSON.parse(this.response);
for(i=0;i<data.length;i++)
   {
    if(data[i].currencies[0].code==="USD")
       {
        console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
        }
    }
      
}
