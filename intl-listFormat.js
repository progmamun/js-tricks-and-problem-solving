const array = ["one", "two", "three"];

const f = new Intl.ListFormat("en-us", {
  style: "narrow",
});

console.log(f.format(array));
