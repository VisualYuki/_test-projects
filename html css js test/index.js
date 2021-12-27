axios({
  method: "get",
  url: "http://jsonplaceholder.typicode.com/posts/1",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

async function AsyncFunc() {
  debugger;
  let i = 12;

  if (i === 12) {
    return true;
  } else {
    return new Promise(false);
  }
}

AsyncFunc().then((resolve) => {
  debugger;

  for (let i = 0; i < 12; i++) {
    console.log(i);
  }
});
