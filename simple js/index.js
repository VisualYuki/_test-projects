const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get(target, prop, receiver) {
    return "test";
  },
};

export let proxy2 = new Proxy(target, handler2);

console.log(target.message1);
console.log(proxy2.message1);
