const {add, mul} = require('./js/mathUtils.js')  //CommonJs导入  const后面的对象相当于解构

console.log(add(20, 30));
console.log(mul(20, 30));


//依赖CSS文件
require('./css/normal.css')