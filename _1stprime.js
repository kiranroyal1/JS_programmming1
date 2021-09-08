    //taking input
    let num_arr=[-1,0,2,5,7,12,9,"*",13];
    //const num=-1;
    let Primeflag = false;
    num_arr.forEach((num) => {
        //if ((num > 1) && (typeof (num) == "number")) {
        if(num>1){
        for (let i = 2; i < num; i++) {
            if (num % 2!= 0)
                Primeflag = true;
            else
                Primeflag = false;
            }
            //Primeflag ? console.log(`entered number ${num} is prime`) : console.log(`you have entered nonprime number: ${num}`)
        }
        else if (typeof num != "number"){
            Primeflag=false;
        }
        Primeflag ? console.log(`\nentered number ${num} is prime`) : console.log(`\nyou have entered nonprime number: ${num}`)
    });