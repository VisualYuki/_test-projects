class myClass {
  static classVar = "string";

  #bar = "bar";

  static myFunc = () => {
    let obj = { 1: "1" };

    return {
      ...obj,
      j: "j",
    };
  };
}
