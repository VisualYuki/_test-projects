//import "./export";
var b = function (value) {
  return value.name;
};

function a() {
  return b();
}

eval("a()");
