//axios({
//  method: "get",
//  url: "http://jsonplaceholder.typicode.com/posts/1",
//})
//  .then((response) => {
//    console.log(response);
//  })
//  .catch((error) => {
//    console.log(error);
//  });
let name ="1";
function foo() {
  return name;
}

name ="2";

console.log(foo());