var str1 = "hey";
//var str1="hello";
var str2;
if (typeof str1 == "string")
    str2 = str1.split('').reverse().join('');
console.log(str2);