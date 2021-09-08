let obj1={id:1,name:"edison"};
let obj2={id:1,name:"edison"};
let objt3={id:1,name:"edison"};
let objt4={id:2,name:"edison"};
function objcmpare(ob1,ob2) {
	//getting properties of both objects
	let obj1prop = Object.getOwnPropertyNames(ob1);
	let obj2prop = Object.getOwnPropertyNames(ob2);

	//comparing the length of properties
	if (obj1prop.length != obj2prop.length){
		return false;
	}

	//checking each individual value is same
	for (let l= 0; l<2; l++) {
		if ((obj1prop[l])!==(obj2prop[l]))
		{
			return false;
		}
		else{
			return true;
		}
	}
}

val1 = objcmpare(obj1,obj2);
console.log("comparing obj1 and obj2 is same ? :"+val1 );
val2 = objcmpare(objt3,objt4);
console.log("comparing obj3 and obj4 is same ? :"+val2 );
