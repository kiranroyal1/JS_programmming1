    let given_num=100;
    let even_sum=0;
    let odd_sum=0;
    let even_arr=[];
    let odd_arr=[];
    for(let i=1;i<=given_num;i++){
        if(i%2==0){
            even_arr.push(i);
            even_sum+=i;}
        else if(i%2!=0){
            odd_arr.push(i);
            odd_sum+=i;}
    }
    console.log(`even_sum is ${even_sum}`);
    console.log(`odd_sum is ${odd_sum}`);