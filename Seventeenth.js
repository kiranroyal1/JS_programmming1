    //initialization
    let p_arr=[];
    let value="ptag";
    let temp_arr=[];
    let counter=0;
    let val_tmp=" ";
    let added=0;
    var n = 1;
    //creating a p tag dynamically;
    //1to10
    for (let i = 0; i <= 10; i++) {
        //creating elements dynamically
        if(i<=5){
            p_arr[i]=document.createElement("p");
            //setting id and value by type coercion
            counter+=1;
            //var n = 1;
            //placeholder variable
            let platmp=p_arr[i];
            console.log(platmp);
            val_tmp=value+counter;
            platmp.setAttribute("id",val_tmp);
            document.body.appendChild(p_arr[i]);
        }
        for (let j = 1; j <= i; j++) {
            if (n >= 11){
                break;
            }
                temp_arr.push(n++);
                //console.log(n++);
            }
        n+=added;
        document.getElementById(val_tmp).innerHTML=temp_arr;
        //setting temp_arr to null after printing one iteration
        while(temp_arr.length){
            temp_arr.pop();
        }
        //p_arr.push(temp_arr);
}
//now accessing the 1 to 10 ptags
console.log(p_arr);