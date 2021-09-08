//printing *s
let star_arr = [];
let star_var = "*";
let star_space = " ";
let k=8;
let k_temp=k;
let temp_concat;
//top part 
for (let i = 0; i <= k_temp;i++){
        //star_arr.push(star_under+star_var);
        temp_concat = (" ").repeat(k) + star_var;
        star_var += ("*").repeat(2);
        k -= 1;
        star_arr.push(temp_concat);
        console.log(star_arr[i]);
}
//below part
for (let y = k_temp-1;y>=0;y--){
    console.log(star_arr[y]);
}
