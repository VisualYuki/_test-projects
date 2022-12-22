//@ts-ignore
let urls: string[] = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/users",
];

async function fetchAll(urls: string[]) {
  let requests: Promise<Response>[] = urls.map((url: string) => fetch(url));
  let results: any[] = [];

  return await Promise.all(requests).then((responses: Response[]) => {
    responses.forEach((response: Response) => {
      response.json().then((response: Response) => {
        results.push(response);
      });
    });

    return results;
  });
}

console.log(await fetchAll(urls));

function bar() {
  return 1;
}

console.log(
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => bar())
);

console.log(fetch("https://jsonplaceholder.typicode.com/todos/1").then(bar));
