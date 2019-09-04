var arrayNames = ['Pedro', 'Jake', 'John'];

// example of callback function
arrayNames.forEach(function(name)){
    console.log(name);
}

// for each takes every element of the array, function uses name as placeholder and does whatever
// you put inside the function 


// --------

function greeting(someGreeting){
    console.log(someGreeting)
}

var spanish = 'Buenos dias';

greeting(spanish);

