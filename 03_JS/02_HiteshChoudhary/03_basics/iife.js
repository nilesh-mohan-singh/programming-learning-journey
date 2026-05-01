// IIFE - Immediately Invoked Function Expressions 


(function chai(){// Named IIFE
    console.log(`DB CONNECTED`);
})();


(() => {
    console.log(`DB CONNECTED TWO`);
})();

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

