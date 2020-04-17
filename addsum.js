function curry(fn) {
  let args = [].slice.call(arguments, 1);
  let fn_ = function () {
      if (arguments.length === 0) {
          return fn.apply(this, args)
      } else {
          args.push(...arguments);
          return fn_
      }
  }
  return fn_
}
function add() {
  return [].reduce.call(arguments, (a, b) => a + b)
}
var x = curry(add, 2)(1, 2, 3,5)();
console.log(x) 


  
