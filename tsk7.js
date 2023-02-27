var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
//a.
var asia=result.filter((ele)=>ele.region=="Asia");
console.log(asia);
//b.
var pop=result.filter((ele)=>ele.population<"200000");
console.log(pop);
//c.
result.forEach((ele)=>c0onsole.log(ele.name));
result.forEach((ele)=>console.log(ele.capital));
result.forEach((ele)=>console.log(ele.flag));
//d.
var res=result.reduce((ccv,cv)=>ccv+cv.population,0);
console.log(res);
//e.
var arr=result.filte((ele)=>ele.currency=="US Dollars");
console.log(arr);
    
