let str = ["Hello"];

console.log("START", new Date().toUTCString());

for (let index = 0; index < 100000000; index++) {
  str.push("!");
}

str = str.join("");

console.log("END", new Date().toUTCString());
console.log(str.length);

// https://www.freecodecamp.org/news/efficient-string-building-in-javascript/