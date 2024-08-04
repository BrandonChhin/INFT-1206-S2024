// variable scope = where a variable is recongized
//                  and accessible (local vs global)

// global (avoid in big programs)
let x = 3;

function function1(){
  // local
  let x = 1;
  console.log(x);
}

function function2(){
  // local
  let x = 2;
  console.log(x);
}