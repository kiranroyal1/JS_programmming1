    myarr1= [{ id: 1, name: 'Stephen covey' }, { id: 2, name: 'Robin Sharma' }, { id: 3, name: 'Tolstoy' }, { id: 3, name: 'Tolstoy' }, { id: 5, name: 'James clear' }];
    for(var i=0;i<myarr1.length-1;i++)
    {
        var arrob1=myarr1[i];
        console.log(`object number${i} is :`);
        console.log(arrob1);
        var arrob1_prop1 = Object.getOwnPropertyNames(arrob1);
        //console.log(arrob1_prop1);
        for(var j=i+1;j<myarr1.length-1;j++)
        {
            var rem_arrob=myarr1[j];
            var arrob2_prop2=window.Object.getOwnPropertyNames(rem_arrob);
                if(arrob1_prop1.length==arrob2_prop2.length)
                {
                    for(var k=0;k<2;k++)
                    {
                        if(arrob1[arrob1_prop1[k]]==rem_arrob[arrob2_prop2[k]])
                        {
                            var del_index=j;      
                        }
                    }
                }
        }
    }
    console.log(`the index at which a copy is found is: ${del_index}`);
    //delete myarr1[3];
    delete myarr1[del_index];
    //myarr1[3]=myarr1[4];
    myarr1[del_index]=myarr1[4];
    myarr1.pop()
    console.log(`after removing duplicates:`);
    console.log(myarr1);