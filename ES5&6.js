//a=5;
//console.log(a);
//var Fname="nandana";
//console.log(Fname.length);
//console.log(typeof(Fname));
// var data=" this is a txt message";
// console.log(data.length);
// console.log(typeof(data));
// console.log(data.indexOf('txt'))
// console.log(data.replace('txt',"text"))
// console.log(data)
// console.log(data.split(' '))
// console.log(data.trim())
// let fruits=["Apple","mango","orange","grapes"];
// console.log(Array.isArray(fruits));
// foreach
// fruits.forEach(function(item){
//     console.log(item)
// })
// let numb=[20,30,40,50];
// numb.forEach(function(item,ind){
//     numb[ind]=item<50

// })
// console.log(numb)
// var obj1=JSON.parse('{"name":"nandana","age":10}');
// console.log(obj1);
// var obj2=JSON.stringify(obj1);
// console.log(obj2)
var a=20;
b=10;
console.log(a+b);

function sum(a,b){
    var S=a+b;
    console.log(`the sum is ${S}`);
}
 sum(10,20);
 var sub=(c,d)=>{
    console.log(`the difference is ${c-d}`);


 }
 sub(60,20)
 //spread operator
 var a=[5,7,6];
 var b=[87,90];
 var c=[...a,...b];
 console.log(c);
 var d=[2,3,...b];
 console.log(d);
 //array destructuring
 var[q,r,s]=[2,3,4];
 console.log(r);
 var[p, ,q]=[2,5,8]
 console.log(q);
 var[b, ,j,...l]=[1,2,3,4,5,6,7]
 console.log(l);