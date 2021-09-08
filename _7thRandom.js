    //generating a random number between 1 to 5
    let randomvalue=Math.floor(Math.random(1, 5)*6)
    if (randomvalue != 0) {
        console.log(`the random value this time is ${randomvalue}`);
    }
    else if (randomvalue == 0) {
        console.log(`Refresh again You've got a zero ${randomvalue}`);
    }