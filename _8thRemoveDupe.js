given_arr=[1,2,9,4,5,8,3,5,1,4,5];
    //takes value and position 
    uniqueArray = given_arr.filter(function (item, pos) {
        /*as indexOF takes 1st found value's index, 
        the same value found at other index pos will be different*/
        return given_arr.indexOf(item) == pos;
    })
    console.log(`unique array is ${uniqueArray}`); 
    //window.alert("as indexOF takes 1st found value's index, the same value found at other index pos will be different"); 