    //writing simple mult with 2 function to pass
    function Twomult(param){
        return param*2;
    }
    ar1=[1,2,3,4,5,6,7,8,9,10];
    //temp arrs
    ar2=[];
    ar3=[];
    ar2=ar1.forEach(Twomult);
    console.log(`this is ar2 using forEach : ${ar2}`);
    console.log(`this is ar1 using forEach : ${ar1}`)
    ar3=ar1.map(Twomult);
    console.log(`this is temp ar3 using map : \n${ar3}`);
    ar1= ar1.map(Twomult);
    console.log(`this is original ar1 using map : ${ar1}`)
    console.log("\n");
    console.log('foreach is more like a one time iterable which is used when you dont want to create but just access');
    console.log("\n by this you can see that array.forEach can't modify the original array \n and map can modify original array and \n can return a new modified array as well")
