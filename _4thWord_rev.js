
    //str1=prompt("Enter a sentence to see its words reversed");
    let str1="Enter a sentence to see its words reversed";
    //str1="Hey this word";

    //using RE
    let arr_str2=str1.match(/([a-z])*/gi);
    //console.log(arr_str2);
    for(let i=0; i<=arr_str2.length-1;i++){
        if(arr_str2[i]!=""){
            arr_str2[i]=arr_str2[i].split('').reverse().join('')+" ";
        }
    }
    arr_str2=arr_str2.join('');
    //window.alert(`result : ${arr_str2}`);
console.log(`result : ${arr_str2}`);