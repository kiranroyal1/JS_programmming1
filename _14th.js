    //multidimensional
    given_arr= [1, 4, 2, 3, [10, 20, 20], [100, 500, 700, 600],
            [2000, 1000]];
    //given_arr = given_arr.flat(Infinity);
    given_arr=given_arr.flat();
    console.log(`flattened array ${given_arr}`);